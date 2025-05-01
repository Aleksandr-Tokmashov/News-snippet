import React, { useState } from "react";
import { Card, Tag, Typography, Button, Space, Flex } from "antd";
import {
  ReadOutlined,
  GlobalOutlined,
  BorderOutlined,
  InfoOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import { IData_SnippetNews } from "../../data";
import ReactCountryFlag from "react-country-flag";
import { AuthorsList } from "../AuthorsList/AuthorsList";
import { FormattedDate } from "../FormattedDate/FormattedDate";
import { ReachCounter } from "../ReachCounter/ReachCounter";
import { TopTraffic } from "../TopTraffic/TopTraffic";
import { Highlights } from "../Highlights/Highlights";
import { DuplicatesList } from "../DuplicatesList/DuplicatesList";
import { KeywordsList } from "../KeywordsList/KeywordsList";
import "./NewsSnippet.css";

const { Title, Text } = Typography;

export const NewsSnippet: React.FC<{ data: IData_SnippetNews }> = ({
  data,
}) => {
  const [showFullText, setShowFullText] = useState(false);
  // для наглядности добавим больше тегов
  const duplicatedKeywords = [
    ...data.KW,
    { value: "tag1", count: 1 },
    { value: "tag2", count: 1 },
    { value: "tag3", count: 1 },
    { value: "tag4", count: 1 },
    { value: "tag5", count: 1 },
    { value: "tag6", count: 1 },
  ];
  const duplicatedData = Array(5).fill(data);

  return (
    <Card className="news-snippet">
      <Flex vertical>
        <Flex justify="space-between">
          <Flex wrap gap="0 20px">
            <FormattedDate date={data.DP} />
            <ReachCounter value={data.REACH} />
            <TopTraffic data={data.TRAFFIC} />
          </Flex>

          <Space>
            <Tag
              color={data.SENT === "positive" ? "#23FFB4" : "#FF093B"}
              className="news-sent"
            >
              {data.SENT}
            </Tag>

            <div className="info-icon">
              <BorderOutlined className="border-outlined" />
              <InfoOutlined className="info-outlined" />
            </div>
            <BorderOutlined className="border-outlined" />
          </Space>
        </Flex>

        <Title level={4} className="news-title">
          {data.TI}
        </Title>

        <Flex wrap gap="middle">
          <Space size={5}>
            <GlobalOutlined />
            <a className="source-link" href={data.URL}>
              {data.DOM}
            </a>
          </Space>

          <Space size={5}>
            <ReactCountryFlag
              countryCode={data.CNTR_CODE}
              svg
              title={data.CNTR}
            />
            <Text type="secondary">{data.CNTR}</Text>
          </Space>

          <Space>
            <ReadOutlined />
            <Text type="secondary">{data.LANG}</Text>
          </Space>

          <AuthorsList authors={data.AU} />
        </Flex>

        <Flex vertical align="start" className="text-section">
          <Highlights items={data.HIGHLIGHTS} />
          <Button
            type="link"
            onClick={() => setShowFullText(!showFullText)}
            className="show-more-btn"
          >
            <Space size={5}>
              {showFullText ? "Show less" : "Show more"}
              <CaretDownOutlined className="caret" />
            </Space>
          </Button>
          {showFullText && <Text className="full-text">{data.AB}</Text>}
        </Flex>

        <KeywordsList keywords={duplicatedKeywords} />
        <a href={data.URL}>
          <Button type="primary" className="source-button">
            Original Source
          </Button>
        </a>
        <DuplicatesList initialData={duplicatedData} />
      </Flex>
    </Card>
  );
};

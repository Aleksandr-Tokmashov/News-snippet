import React from "react";
import { Card, Typography, Flex, Space } from "antd";
import {
  ReadOutlined,
  GlobalOutlined,
  BorderOutlined,
  InfoOutlined,
} from "@ant-design/icons";
import { IData_SnippetNews } from "../../data";
import ReactCountryFlag from "react-country-flag";
import { AuthorsList } from "../AuthorsList/AuthorsList";
import { FormattedDate } from "../FormattedDate/FormattedDate";
import { ReachCounter } from "../ReachCounter/ReachCounter";
import "./DuplicateCard.css";

const { Title, Text } = Typography;

export const DuplicateCard: React.FC<{ data: IData_SnippetNews }> = ({
  data,
}) => {
  return (
    <Card className="duplicate-card">
      <Flex justify="space-between">
        <Space size={5}>
          <FormattedDate date={data.DP} />
          <ReachCounter value={data.REACH} />
        </Space>

        <Space>
          <div className="info-icon">
            <BorderOutlined className="border-outlined" />
            <InfoOutlined className="info-outlined" />
          </div>
          <BorderOutlined className="border-outlined" />
        </Space>
      </Flex>
      <Title level={4}>{data.TI}</Title>
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
    </Card>
  );
};

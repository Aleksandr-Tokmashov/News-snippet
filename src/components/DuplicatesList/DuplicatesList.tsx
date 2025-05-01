import React, { useState } from "react";
import { List, Button, Select, Space, Flex, Typography } from "antd";
import { DownOutlined } from "@ant-design/icons";
import type { SelectProps } from "antd";
import { DuplicateCard } from "../DuplicateCard/DuplicateCard";
import { IData_SnippetNews } from "../../data";
import "./DuplicatesList.css";

const { Option } = Select;
const { Text } = Typography;

type SortField = "DP" | "TI" | "REACH" | "CNTR";
type SortOrder = "asc" | "desc";

interface SortableNewsListProps {
  initialData: IData_SnippetNews[];
  defaultSortField?: SortField;
  defaultSortOrder?: SortOrder;
  initialDisplayCount?: number;
  loadMoreStep?: number;
}

export const DuplicatesList: React.FC<SortableNewsListProps> = ({
  initialData,
  defaultSortField = "DP",
  defaultSortOrder = "desc",
  initialDisplayCount = 1,
  loadMoreStep = 3,
}) => {
  const [displayCount, setDisplayCount] = useState<number>(initialDisplayCount);
  const [sortField, setSortField] = useState<SortField>(defaultSortField);
  const [sortOrder, setSortOrder] = useState<SortOrder>(defaultSortOrder);

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + loadMoreStep);
  };

  const handleSortChange: SelectProps["onChange"] = (value) => {
    const [field, order] = String(value).split("_") as [SortField, SortOrder];
    setSortField(field);
    setSortOrder(order);
  };

  const sortedData = [...initialData].sort((a, b) => {
    if (sortField === "TI") {
      return sortOrder === "asc"
        ? a.TI.localeCompare(b.TI)
        : b.TI.localeCompare(a.TI);
    } else if (sortField === "DP") {
      return sortOrder === "asc"
        ? new Date(a.DP).getTime() - new Date(b.DP).getTime()
        : new Date(b.DP).getTime() - new Date(a.DP).getTime();
    } else if (sortField === "REACH") {
      return sortOrder === "asc" ? a.REACH - b.REACH : b.REACH - a.REACH;
    } else if (sortField === "CNTR") {
      return sortOrder === "asc"
        ? a.CNTR.localeCompare(b.CNTR)
        : b.CNTR.localeCompare(a.CNTR);
    }
    return 0;
  });

  const displayedData = sortedData.slice(0, displayCount);
  const hasMore = displayCount < sortedData.length;

  return (
    <>
      <Space direction="vertical">
        <Flex justify="space-between">
          <Space size={5}>
            <Text type="secondary">Duplicates:</Text>
            <Text>{initialData.length}</Text>
          </Space>
          <Select
            className="sort-select"
            labelInValue={true}
            defaultValue={`${defaultSortField}_${defaultSortOrder}`}
            onChange={handleSortChange}
          >
            <Option value="DP_desc">By date (newest first)</Option>
            <Option value="DP_asc">By date (oldest first)</Option>
            <Option value="TI_asc">By title (A-Z)</Option>
            <Option value="TI_desc">By title (Z-A)</Option>
            <Option value="REACH_desc">By reach (high to low)</Option>
            <Option value="REACH_asc">By reach (low to high)</Option>
            <Option value="CNTR_asc">By country (A-Z)</Option>
            <Option value="CNTR_desc">By country (Z-A)</Option>
          </Select>
        </Flex>
        <List
          dataSource={displayedData}
          renderItem={(item) => (
            <List.Item>
              <DuplicateCard data={item} />
            </List.Item>
          )}
          grid={{ gutter: 16, column: 1 }}
        />

        {hasMore && (
          <Button onClick={handleLoadMore} className="view-duplicates-btn">
            <Space size={5}>
              <DownOutlined />
              View Duplicates
            </Space>
          </Button>
        )}
      </Space>
    </>
  );
};

import React from "react";
import { Space, Typography } from "antd";
import { IData_TrafficItem } from "../../data";

const { Text } = Typography;

interface TopTrafficProps {
  data: IData_TrafficItem[];
}

export const TopTraffic: React.FC<TopTrafficProps> = ({ data }) => {
  const topCountries = [...data].sort((a, b) => b.count - a.count).slice(0, 3);

  const total = topCountries.reduce((sum, item) => sum + item.count, 0);

  return (
    <Space size={5}>
      <Text type="secondary">Top Traffic:</Text>
      {topCountries.map((item) => {
        const percentage = Math.round((item.count / total) * 100);
        return (
          <Space size={5} key={item.value}>
            <Text type="secondary">{item.value}</Text>
            <Text>{percentage}%</Text>
          </Space>
        );
      })}
    </Space>
  );
};

import React from "react";
import { Typography, Space } from "antd";

const { Text } = Typography;

interface ReachCounterProps {
  value: number;
}

export const ReachCounter: React.FC<ReachCounterProps> = ({ value }) => {
  const formatNumber = (num: number): string => {
    if (num >= 1_000_000) {
      return `${(num / 1_000_000).toFixed(1)}M`;
    }
    if (num >= 1_000) {
      return `${(num / 1_000).toFixed(1)}K`;
    }
    return num.toString();
  };

  return (
    <Space size={5}>
      <Text>{formatNumber(value)}</Text>
      <Text type="secondary">Reach</Text>
    </Space>
  );
};

import React from "react";
import { Typography, Space } from "antd";

const { Text } = Typography;

interface FormattedDateProps {
  date: string;
}

export const FormattedDate: React.FC<FormattedDateProps> = ({ date }) => {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = new Intl.DateTimeFormat("en-GB", { month: "short" }).format(
    dateObj
  );
  const year = dateObj.getFullYear();

  return (
    <time dateTime={date}>
      <Space size={5}>
        <Text>{day}</Text>
        <Text type="secondary">
          {month} {year}
        </Text>
      </Space>
    </time>
  );
};

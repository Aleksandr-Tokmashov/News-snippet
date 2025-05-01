import React from "react";
import { Typography, Tag } from "antd";

const { Text } = Typography;

interface HighlightsProps {
  items: string[];
}

export const Highlights: React.FC<HighlightsProps> = ({ items }) => {
  const renderHighlightedText = (text: string, itemIndex: number) => {
    const parts = text.split(/(<kw>.*?<\/kw>)/);

    return parts.map((part, partIndex) => {
      if (part.startsWith("<kw>") && part.endsWith("</kw>")) {
        const keyword = part.slice(4, -5);
        return (
          <Tag color="#1677FF" key={`kw-${itemIndex}-${partIndex}`}>
            <Text>{keyword}</Text>
          </Tag>
        );
      }
      return (
        <React.Fragment key={`txt-${itemIndex}-${partIndex}`}>
          {part}
        </React.Fragment>
      );
    });
  };

  return (
    <Text>
      {items.map((item, itemIndex) => {
        const processedText = itemIndex > 0 ? item.replace(/^…/, "") : item;

        return (
          <React.Fragment key={`item-${itemIndex}`}>
            {renderHighlightedText(processedText, itemIndex)}
            {itemIndex < items.length - 1 && "; "}
          </React.Fragment>
        );
      })}
    </Text>
  );
};

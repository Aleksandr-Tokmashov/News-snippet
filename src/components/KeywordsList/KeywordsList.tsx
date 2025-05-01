import React, { useState } from "react";
import { Tag, Button, Space, Typography } from "antd";
import { IData_TagItem } from "../../data";
import "./KeywordsList.css";

const { Text } = Typography;

interface KeywordsListProps {
  keywords: IData_TagItem[];
  maxVisible?: number;
}

export const KeywordsList: React.FC<KeywordsListProps> = ({
  keywords,
  maxVisible = 6,
}) => {
  const [showAll, setShowAll] = useState(false);
  const shouldShowToggle = keywords.length > maxVisible;
  const visibleKeywords = showAll ? keywords : keywords.slice(0, maxVisible);
  const hiddenCount = keywords.length - maxVisible;

  return (
    <div>
      <Space wrap size={[5, 3]}>
        {visibleKeywords.map((keyword) => (
          <Tag key={keyword.value} className="keyword-tag">
            <Space size={5}>
              <Text type="secondary">{keyword.value}</Text>
              {keyword.count > 1 && <Text>{keyword.count}</Text>}
            </Space>
          </Tag>
        ))}

        {shouldShowToggle && (
          <Button
            type="link"
            onClick={() => setShowAll(!showAll)}
            className="show-more-btn"
          >
            {showAll ? "Show Less" : `Show All +${hiddenCount}`}
          </Button>
        )}
      </Space>
    </div>
  );
};

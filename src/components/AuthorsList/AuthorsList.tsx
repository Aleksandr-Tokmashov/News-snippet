import { UserOutlined } from "@ant-design/icons";
import React from "react";

interface AuthorsListProps {
  authors: string[];
  maxVisible?: number;
}

export const AuthorsList: React.FC<AuthorsListProps> = ({
  authors,
  maxVisible = 2,
}) => {
  const formattedAuthors = authors
    .map((author) => {
      const parts = author.split(" ");
      return parts.length > 1
        ? `${parts[0]} ${parts[parts.length - 1][0]}.`
        : parts[0];
    })
    .slice(0, maxVisible)
    .join(", ");

  return (
    <span className="authors-list">
      <UserOutlined /> {formattedAuthors}
      {authors.length > maxVisible && ", et al."}
    </span>
  );
};

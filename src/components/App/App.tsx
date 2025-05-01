import React from "react";
import { NewsSnippet } from "../NewsSnippet/NewsSnippet";
import { newsData } from "../../data";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <NewsSnippet data={newsData} />
    </div>
  );
};

export default App;

import React from "react";
import PropTypes from "prop-types";
import ArticleList from "./ArticleList/ArticleList";
import articles from "./data/articles.json";

const App = () => {
  return <div className="App">
    <ArticleList articles={articles}/>
  </div>;
};

App.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      shortText: PropTypes.string.isRequired,
      pubDate: PropTypes.string.isRequired,
      pubYear: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    })
  ).isRequired
};
export default App;

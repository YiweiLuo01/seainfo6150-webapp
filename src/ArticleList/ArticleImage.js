import React from "react";
import PropTypes from "prop-types";
import imageStyle from './ArticleImage.module.css';

const ArticleImage =({url, title}) => (
    <div>
        <img className = {imageStyle.articleImage} src = {url} alt ={title}/>
    </div>
);

ArticleImage.propTypes = {
    url:PropTypes.string.isRequired,
    titile:PropTypes.string.isRequired
};


export default ArticleImage;
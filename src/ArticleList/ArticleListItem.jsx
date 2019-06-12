import React from "react";
import PropTypes from "prop-types";
import listStyle from './ArticleListItem.module.css'

class ArticleListItem extends React.Component {
    render(){
        return(
                <li className={listStyle.listClass}>
                <header>
                    <h1 className={listStyle.title}>{this.props.title}</h1>
                </header>
                <section className={listStyle.shortText}>{this.props.shortText}</section>
                <p className={listStyle.listAuthor}><i>By:{this.props.author}</i></p>
                <div className={listStyle.listDate}><time>{this.props.date}</time> </div>
                </li>
        )
    }
}

ArticleListItem.propTypes = {
    title : PropTypes.string.isRequired,
    date : PropTypes.string.isRequired,
    year : PropTypes.string.isRequired, 
    author : PropTypes.string.isRequired,
    shortText: PropTypes.string.isRequired
};

export default ArticleListItem;
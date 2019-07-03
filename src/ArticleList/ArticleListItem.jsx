import React from "react";
import PropTypes from "prop-types";
import listStyle from './ArticleListItem.module.css'
import ArticleImage from'./ArticleImage';

class ArticleListItem extends React.Component {
    render(){
        return(
                <li className={listStyle.listClass}>
                    <div className={listStyle.articleImage}>
                        <ArticleImage url={this.props.url} title={this.props.title}/>
                    </div>
                    <div className={listStyle.articleWords}>
                        <header>
                            <h1 className={listStyle.title}>{this.props.title}</h1>
                        </header>
                        <section className={listStyle.shortText}>{this.props.shortText}</section>
                        <p className={listStyle.listAuthor}><i>By:{this.props.author}</i>
                        <div className={listStyle.listDate}><time>{this.props.date}</time> </div>
                        </p>
                    </div>
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
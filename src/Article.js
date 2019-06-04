import React  from 'react';
import Proptypes from 'prop-types';

const Article = ({title, shortText, pubDate, author}) =>(
    <article>
        <header>
         <h1>{title}</h1>
        <p><i>By:{author}</i></p>
        <p><time datetime='2018-11-21'>{pubDate}</time> </p>
        </header>

        <section>
        {shortText}                  
        </section>
        
    </article>
);
Article.propTypes = {
    title:Proptypes.string.isRequired,
    author: Proptypes.string.isRequired,
    pubDate: Proptypes.string.isRequired,
    pubYear: Proptypes.string.isRequired,
    shortText: Proptypes.string.isRequired,

};

export default Article;



import React from "react";

import ReactHtmlParser from "react-html-parser";

const dateConvert = (d) => {
  const getMoment = new Date(d);
  console.log("getMoment : ", getMoment.getDate())
 
  let options = { month: 'long'};
  return `${getMoment.getDate()} ${new Intl.DateTimeFormat('en-US', options).format(getMoment)} ${getMoment.getFullYear()}`;
};
const RssList = (props) => {
  const { title, link, content, pubDate } = props.data;

  return (
    <div className="rssitem-wrap card">
      <article className="rss-article">
        <h2>{title}</h2>
       
        <div className="rss-content">
          <div className="content">{ReactHtmlParser(content)}</div>
        </div>
        <div className="article-footer">
          <div>{dateConvert(pubDate)}</div>
         
        </div>
      </article>
    </div>
  );
};

export default RssList;

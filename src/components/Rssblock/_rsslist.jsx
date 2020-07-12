import React from "react";
import RssItem from "./_rssitem";

const RssList = (props) => {
  return (
    <div className="Rsslist">
      {props.data.map((i) => (
        <RssItem key={i.guid} data={i} />
      ))}
    </div>
  );
};

export default RssList;

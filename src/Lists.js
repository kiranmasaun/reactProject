import React from "react";

const Lists = ({ results }) => {
  const list = results.map((item) => {
    return (
      <div key={item.pageid}>
        <h1>
          <a
            href={"https://en.wikipedia.org?curid=" + item.pageid}
            target="_blank"
            rel="noreferrer"
          >
            {item.title}
          </a>
        </h1>
        <p dangerouslySetInnerHTML={{ __html: item.snippet }}></p>
      </div>
    );
  });
  return list;
};

export default Lists;

import React from "react";

const DisplayTag = ({ tags }) => {
  return (
    <div>
      {tags.map(tag => (
        <div className="text-center" key={tag + Date.now()}>
          <li className="mx-2 mb-3 tag" value={tag}>
            {tag}
          </li>
        </div>
      ))}
    </div>
  );
};

export default DisplayTag;

import React from "react";

const Column = (props) => {
  return (
    <div className="col">
      <div className="info-box">{props.icon}</div>
      <h5>{props.title}</h5>
      <p>{props.content}</p>
    </div>
  );
};

export default React.memo(Column);

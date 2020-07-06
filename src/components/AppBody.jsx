import React from "react";
import Content from "./Content";

const AppBody = ({ setMessage }) => {
  return (
    <div className="app-body">
      <Content setMessage={setMessage} />
    </div>
  );
};

export default AppBody;

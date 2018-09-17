import React from "react";
import "./LoaderScreen.scss";

export default props => {
  return (
    <div className="container">
      <div className="spinner">
        <div className="double-bounce1" />
        <div className="double-bounce2" />
      </div>
      Loading, did you begin the server?
    </div>
  );
};

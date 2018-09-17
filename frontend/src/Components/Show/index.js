import React from "react";

export default props => {
  let { shows, parsed } = props;
  if (shows === false) return false;

  var currentShow = shows.find((el, i) => {
    if (parsed["id"] === undefined) parsed["id"] = "a1";
    return el["id"] === parsed["id"];
  });

  let { product_image_url, title, episodes } = currentShow;


    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="moive-contain">
          <img
            alt=""
            style={{ width: "50%" }}
            className="img-responsive"
            src={product_image_url}
          />
          <p> {episodes} episodes </p>
          <h1> {title} </h1>
        </div>
      </div>
    );

};

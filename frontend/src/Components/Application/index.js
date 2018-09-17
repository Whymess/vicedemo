import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Show, LoaderScreen } from "../../Components";

import queryString from "query-string";

const API = "http://localhost:3000/db";

export default class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: "",
      fetching: true
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        let { shows } = data;
        this.setState({
          shows,
          fetching: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  renderShowIcons() {
    let { shows } = this.state;
    if (shows.length) {
      return shows.map((el, i) => {
        let { id, product_image_url } = el;
        return (
          <Link
            role="button"
            style={{
              backgroundImage: `url(${product_image_url})`
            }}
            className="col item"
            key={i}
            to={`/?id=${id}`}
          />
        );
      });
    }
  }

  render() {
    const parsed = queryString.parse(this.props.location.search);
    let { shows, fetching } = this.state;
    if(fetching === true){
      return <LoaderScreen/>
    }
    return (
      <div className="container">
        <div className="row header justify-content-center mt-4">
          {this.renderShowIcons()}
        </div>

        <div className="row mt-5">
          <div className="col">
            <Show shows={shows.length > 0 ? shows : false} parsed={parsed} />
          </div>
        </div>
      </div>
    );
  }
}

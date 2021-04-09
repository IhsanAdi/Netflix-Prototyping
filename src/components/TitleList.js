import React, { Component } from "react";
import "../App.css";
import Item from "./Item";

class TitleList extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false };
  }

  getInitialState() {
    return { data: [], mounted: false };
  }

  //fetch api data
  loadContent() {
    const apiKey = "87dfa1c669eea853da609d4968d294be";
    //Use to updated newly requested content
    const requestUrl =
      "https://api.themoviedb.org/3/" + this.props.url + "&api_key=" + apiKey;
    fetch(requestUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ data: data, isLoading: true, mounted: true });
      })
      .catch((err) => {
        console.log("There has been an error");
      });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.url !== this.props.url && nextProps.url !== "") {
      this.setState({ mounted: true, url: nextProps.url });
      this.loadContent();
    }
  }

  componentDidMount() {
    if (this.props.url !== "") {
      this.loadContent();
      this.setState({ mounted: true });
    }
  }

  onSubmit = (event) => {
    this.setState({ isLoading: true });
  };

  render() {
    let titles = "";
    if (this.state.isLoading === false) {
      return (
        <div className="false-tester">
          {/* <p>Currently loading...</p> */}
        </div>
      );
    } else {
      console.log("success");
      titles = this.state.data.results.map((title, i) => {
        if (i < 5) {
          let name = "";
          let backDrop =
            "http://image.tmdb.org/t/p/original" + title.backdrop_path;
          if (!title.name) {
            name = title.original_title;
          } else {
            name = title.name;
          }
          return (
            <Item key={title.id} title={name} score={title.vote_average} overview={title.overview} backdrop={backDrop}/>
          );
        } else {
          return <div key={title.id}></div>;
        }
      });

      return (
        <div
          ref="titlecategory"
          className="TitleList"
          data-loaded={this.state.mounted}
        >
          <div className="Title">
            <h1>{this.props.title}</h1>
            <div className="titles-wrapper">{titles}</div>
          </div>
        </div>
      );
    }
  }
}

export default TitleList;

import React, { Component } from "react";
import Result from "./Result";
import "./App.css";

class App extends Component {
  state = {
    slugs: [],
    currentImageIndex: 0,
    err: false,
  };

  handlePictureShow = (e) => {
    e.preventDefault();
    const API = `https://picsum.photos/v2/list`;

    fetch(API)
      .then((response) => this.checkResponseStatus(response))
      .then((response) => response.json())
      .then((data) => this.handleResponse(data))
      .catch((err) => {
        console.log(err);
      });
  };

  handleResponse(data) {
    let chosenPictures = this.choosePictures(data);

    this.setState(() => ({
      err: false,
      slugs: this.extractsSlugs(chosenPictures),
    }));
  }

  checkResponseStatus(response) {
    if (response.ok) {
      return response;
    }
    throw Error("Error");
  }

  choosePictures(images) {
    const numberOfPictures = 3;
    let chosenPictures = [];
    let currentIndexTemp = this.state.currentImageIndex;
    for (let i = 0; i < numberOfPictures; i++, currentIndexTemp++) {
      if (currentIndexTemp === images.length) {
        currentIndexTemp = 0;
      }
      chosenPictures.push(images[currentIndexTemp]);
    }
    this.setState(() => ({
      currentImageIndex: currentIndexTemp,
    }));
    return chosenPictures;
  }

  extractsSlugs(images) {
    return images.map((image) => image.url.slice(28));
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handlePictureShow}>Next</button>
        <Result stateValues={this.state} />
      </div>
    );
  }
}

export default App;

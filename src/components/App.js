import React, { Component } from 'react';
import './App.css';
import dom2image from 'dom-to-image';
import fileSaver from 'file-saver';
import './App.css';

export default class App extends Component {

  constructor(){
    super();

    this.state = {
      image: null
    };

    this.handleImageSrc = this.handleImageSrc.bind(this);
    this.handleExport = this.handleExport.bind(this);
    this.handleUpload = this.handleUpload.bind(this);

    handleImageSrc = ({ target }) => {
      this.setStage({ image: target.value });
    };
    handleUpload = ({ target }) => {
      const reader = new FileReader();

      reader.readAsDataURL(target.files[0]);
      reader.onLoad = () => {
        this.setState({ background: reader.result });
      };
    };
  }

  handleExport() {
    dom2image.toMeme(this.imageExport).then(meme => {
      fileSaver.saveAs(meme);
    });
  }

  render() {
    const { image } = this.state;

    return (
      <main>
        <div className="app">
          <header>
            <h1 className="app-title">
            Make your Meme
            </h1>
          </header>
          <h2 className="image">
            Hilarious Picture
          </h2>
          <section>
            <label>
                ImageSrc:
              <input onChange={event => this.handleImageSrc(event)}/>
            </label>
            <label>
              Background:
              <input name="url" onChange={this.handleUpload}/>
            </label> 
          </section>
        </div>
      </main>
    );
  }
}

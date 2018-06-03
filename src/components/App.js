import React, { Component } from 'react';
import dom2image from 'dom-to-image';
import fileSaver from 'file-saver';
import './App.css';


export default class App extends Component {

  constructor() {
    super();

    this.state = {
      header: 'I don/t always drink tea',
      footer: 'because it tastes terrible.'
      image: 'http://i0.kym-cdn.com/entries/icons/mobile/000/015/878/thatsnoneofmy.jpg', 
    };
  }
  

  handleBackground({ target }) {
    this.setState({
      background: target.value
    });
  }

  
  handleImageSrc({ target }) {
    this.setStage({ image: target.value });
  }

  handleExport() {
    dom2image.toMeme(this.imageExport).then(meme => {
      fileSaver.saveAs(meme, 'meme.png');
    });
  }

  handleUpload({ target }) {
    const reader = new FileReader();

    reader.readAsDataURL(target.files[0]);
    reader.onLoad = () => {
      this.setState({ background: reader.result });
    };
  }


  render() {
    const { background, image, content, current } = this.state;

    //const meme = {
    //  text: content,
    //  f: current
    //};

    return (
      <main>
        <div className="meme">
          <header>
            <h1 className="app-title">
            Meme-Maker
            </h1>
          </header>
          <section className="search-bars">
            <label>
              Image File Upload:
              <input name="file" onChange={this.handleUpload} placeholder="File"/>
              Image URL:
              <input name="url" onChange={this.handleBackground} placeholder="URL"/>
              Meme Text:
              <input onChange={event => this.handleImageSrc(event)} placeholder="Meme Text"/>
            </label> 
          </section>
          <fieldset>
            <div className="image" ref={node => this.imageExport = node}>
              <img src={image}/>
            </div>
          </fieldset>
        </div>
      </main>
    );
  }
}

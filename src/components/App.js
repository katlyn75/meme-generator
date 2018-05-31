import React, { Component } from 'react';
import './App.css';
import dom2image from 'dom-to-image';
import fileSaver from 'file-saver';
import './App.css';

export default class App extends Component {

  constructor(){
    super();

    this.state = {
      content: 'Meme your mom',
      image: 'http://i0.kym-cdn.com/entries/icons/mobile/000/015/878/thatsnoneofmy.jpg',
      text: 'I don/t always drink tea' 
    };


  }
  
  
  handleImageSrc({ target }) {
    this.setStage({ image: target.value });
  }

  handleUpload({ target }) {
    const reader = new FileReader();

    reader.readAsDataURL(target.files[0]);
    reader.onLoad = () => {
      this.setState({ background: reader.result });
    };
  }

  handleExport() {
    dom2image.toMemes(this.imageExport).then(memes => {
      fileSaver.saveAs(memes, 'meme.png');
    });
  }

  render() {
    const { image } = this.state;

    return (
      <main>
        <h1 className="app-title">
          Make your Meme
        </h1>
        <div className="meme">
          <section>
            <label>
              <input onChange={event => this.handleImageSrc(event)} placeholder="Image URL"/>
            </label>
            <label>
              Background:
              <input name="url" onChange={this.handleUpload}/>
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

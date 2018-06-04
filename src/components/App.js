import React, { Component } from 'react';
import dom2image from 'dom-to-image';
import fileSaver from 'file-saver';
import './App.css';


export default class App extends Component {

  constructor() {
    super();

    this.state = {
      header: 'I don/t always drink tea',
      footer: 'because it tastes terrible.',
      image:'http://i0.kym-cdn.com/entries/icons/mobile/000/015/878/thatsnoneofmy.jpg',
      color: '#000000' 
    };
  }


  handleBackground({ target }) {
    this.setState({
      background: target.value
    });
  }

  handleNameChange({ target }) {
    this.setState({ name: target.value });
  } 

  handleColorChange({ target }) {
    this.setState({ color: target.value });
  } 
  
  handleImageSrc({ target }) {
    this.setState({ image: target.value });
  }

  handleHeaderChange({ target }) {
    this.setState({ header: target.value });
  }

  handleFooterChange({ target }) {
    this.setState({ footer: target.value });
  }

  handleUpload({ target }) {
    const reader = new FileReader();
    
    reader.readAsDataURL(target.files[0]);
    reader.onLoad = () => {
      this.setState({ image: reader.result });
    };
  }
     
  handleExport() {
    dom2image.toMeme(this.imageExport).then(meme => {
      fileSaver.saveAs(meme, 'meme.png');
    });
  }


  render() {
    const { header, footer, image, color } = this.state;

    return (
      <main>
        <div className="meme">
          <header>
            <h1>
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

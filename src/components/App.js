import React, { Component } from 'react';
import dom2image from 'dom-to-image';
import fileSaver from 'file-saver';
import './App.css';


export default class App extends Component {

  constructor() {
    super();

    this.state = {
      header: 'I don\'t often drink tea...',
      footer: 'because it tastes terrible.',
      image:'http://i0.kym-cdn.com/entries/icons/mobile/000/015/878/thatsnoneofmy.jpg',
      text: '' 
    };
  }

  handleTextChange({ target }) {
    this.setState({ text: target.value });
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
    const { header, footer, image } = this.state;

    return (
      <main>
        <div className="meme-maker">
          <header>
            <h1>
              Meme-Maker
            </h1>
          </header>
          <div className="inputs">
            <label className="labels">
              File Upload:
              <input type="file" onChange={event => this.handleUpload(event)} placeholder="File"/>&nbsp;
              Image URL: 
              <input type="url" value={image} onChange={event => this.handleImgSrc(event)} placeholder="URL"/>&nbsp;
              Meme Text:
              <input type="text" onChange={event => this.handleImageSrc(event)}placeholder="Meme Text"/>&nbsp;
            </label>
          </div> 
          <div className="image-container" ref={node => this.ImageExport = node}>
            <section className="meme-header">
              {header}
            </section>
            <img src={image}/>
            <section className="meme-footer">
              {footer}
            </section>
            <button onClick={() => this.handleExport()}>
            Export meme
            </button>
          </div>
          <footer>
            Meme Your Mom 2018
          </footer>
        </div>
      </main>
    );
  }
}

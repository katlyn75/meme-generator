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
      color: '#000000',
      selected: 'default' 
    };
  }

  //handleImageChange({ target }) {
  //  this.setState({ text: target.value });
  //} 

  handleColorChange({ target }) {
    this.setState({ color: target.value });
  } 
  
  handleImageSrc({ target }) {
    this.setState({ image: target.value });
  }

  handleImageChange({ target }) {
    this.setState({ selected: target.value });
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
    dom2image.toBlob(this.imageExport).then(blob => {
      fileSaver.saveAs(blob, 'image.png');
    });
  }


  render() {
    const { header, footer, image, color, selected } = this.state;

    return (
      <main>
        <header>
          <h1>
          Meme-Maker
          </h1>
        </header>
        <section>
          <div>
            <label>
            File Upload:
              <input value={image} onChange={event => this.handleUpload(event)} placeholder="choose file"/>&nbsp;
              <button onClick={() => this.handleExport()}>
            Upload File
              </button>
            Image URL: 
              <input value={image} onChange={event => this.handleImageSrc(event)} placeholder="enter url"/>&nbsp;
            </label>
            <button onClick={() => this.handleExport()}>
            Image URL
            </button>
          </div>
          <div className="meme-text">
            <label>
              Meme Text:
              <input value={name} onChange={event => this.handelNameChange(event)}/>
              <button onClick={() => this.handleExport()}>
              Export Meme
              </button>
            </label>
          </div> 
        </section>
        <section>
          <div className="image-container" ref={node =>           this.ImageExport = node}>
            <section className="meme-header">
              {header}
            </section>
            <img src={image}/>
            <section className="meme-footer">
              {footer}
            </section>
          </div>
        </section>
        <footer>
            Meme Your Mom | 2018
        </footer>
      </main>
    );
  }
}

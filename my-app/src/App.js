import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    imgArr: [
      'https://alfabank.com/app/uploads/2018/03/index_banner_1.jpg',
      'https://alfabank.com/app/uploads/2018/09/Brand_1440_500_year_results.jpg',
      'https://alfabank.com/app/uploads/2018/08/Brand_1440_500_fin_otchet.jpg'
    ],
    imgIndex: 0
  };
  handleVperedClick = () => {
    this.setState({imgIndex: this.state.imgIndex + 1});
    if (this.state.imgIndex === this.state.imgArr.length - 1) {
      this.setState({
        imgIndex: 0
      })
    }
  }
  handleNazadClick = () => {
    this.setState({
      imgIndex: this.state.imgIndex - 1
    })
    if (this.state.imgIndex === 0) {
      this.setState({
        imgIndex: this.state.imgArr.length - 1
      })
    }
  }
  render() {
    return (
      <div className="App">
        <div className="blockImg">
          <img src={this.state.imgArr[this.state.imgIndex]} />
        </div>
        <div className="blockBtn">
          <button className="left" onClick={this.handleNazadClick}></button>
          <button className="right" onClick={this.handleVperedClick}></button>
        </div>
        <div className="circles">
          {
            this.state.imgArr.map((img, index) => (
              <div key={img} className={index === this.state.imgIndex ? 'blackCircle' : 'circle'}></div>
            ))
          }
        </div>
      </div>
    )
  }
}
export default App
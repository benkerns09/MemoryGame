import React, { Component } from 'react';
import './MemoryCard.css';

class MemoryCard extends Component {

  constructor() {
    super();
    this.state = {isFlipped: false};
  }

  clickHandler() {
    this.setState({
      isFlipped: !this.state.isFlipped 
    })
  }
  render() {
    var MemoryCardInnerClass= "MemoryCardInner";
    if (this.state.isFlipped) {
      MemoryCardInnerClass += " flipped";
    }

    return (
      <div className="MemoryCard" onClick={this.clickHandler.bind(this)}>
        <div className={MemoryCardInnerClass}>
          <div className="MemoryCardBack">
            <img src="https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png" className="logo" />
          </div>
          <div className="MemoryCardFront">
            ∆
          </div>
        </div>
      </div>
    );
  }
}

export default MemoryCard;
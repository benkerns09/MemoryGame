import React, { Component } from 'react';
import './MemoryCard.css'

class MemoryCard extends Component {

  render() {
    var MemoryCardInnerClass= "MemoryCardInner";
    if (this.props.isFlipped) {
      MemoryCardInnerClass += " flipped";
    }

    return (
      <div className="MemoryCard" onClick={this.props.pickCard}>
        <div className={MemoryCardInnerClass}>
          <div className="MemoryCardBack">
            <img src="https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png" className="logo" />
          </div>
          <div className="MemoryCardFront">
            {this.props.symbol}
          </div>
        </div>
      </div>
    );
  }
}

export default MemoryCard;
import React, { Component } from 'react';
import Counter from './Counter.js';

const style = {
  margin: '20px'
};

class ControlPanel extends Component {

  constructor(props) {
    super(props);

    this.onCounterUpdate = this.onCounterUpdate.bind(this);

    this.initValues = [ 0, 10, 20];

    const initSum = this.initValues.reduce((a, b) => a+b, 0);
    this.state = {
      sum: initSum
    };

    console.log('enter constructor ' ,this.props.caption);
  }
// 11111
  onCounterUpdate(newValue, previousValue) {
    const valueChange = newValue - previousValue;
    this.setState({ sum: this.state.sum + valueChange});
  }
  componentWillMount(){
      console.log('enter componentWillMount ' , this.props.caption);
  }

  render() {
    console.log('enter render ' , this.props.caption);
    return (
      <div style={style}>
        <Counter onUpdate={this.onCounterUpdate} caption="First" initValue={this.initValues[0]} />
        <Counter onUpdate={this.onCounterUpdate} caption="Second" initValue={this.initValues[1]} />
        <Counter onUpdate={this.onCounterUpdate} caption="Third" initValue={this.initValues[2]} />
        <hr/>
        <div>Total Count: {this.state.sum}</div>
        <button onClick={()=> this.forceUpdate() }>Click me to repaint!</button>
      </div>
    );
  }
  componentDidMount(){
    console.log('enter componentDidMount ' , this.props.caption);
  }

}

export default ControlPanel;
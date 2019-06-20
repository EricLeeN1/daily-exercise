import React from 'react'

const scaleNames = {
  c: '摄氏度',
  f: '华氏度'
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }
  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>输入温度单位是:{scaleNames[scale]}</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    )
  }
}

export default TemperatureInput

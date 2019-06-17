import React from 'react';
import logo from '../logo.svg';
import '../App.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Eric',
  lastName: 'Lee'
};

function Name(props) {
  return <p>{formatName(props.user)} <code>src/App.js</code> 开始再次学习React，并力争用到实战中.</p>
}

function Logo(props) {
  return <img src={props.logo} className="App-logo" alt="logo" />
}

function Timer(props) {
  return <p>当前时间：{props.date}</p>
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number, index) =>
    <li key={number.toString()} data-index={index}>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), isLoggedIn: false, number: [1, 2, 3, 4, 5, 6] };
    this.handleClick = this.handleClick.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick()
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  handleClick(e) {
    e.preventDefault();
    console.log('====================================');
    console.log('链接已经被点击');
    console.log('====================================');
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    return (
      <div className="App">
        <header>
          <Logo logo={logo}></Logo>
          <Name user={user}></Name>
          <Timer date={this.state.date.toLocaleTimeString()}></Timer>
          <NumberList numbers={this.state.number}></NumberList>
          <a href="#" onClick={this.handleClick}>
            Click me
          </a>
          {button}
        </header>
      </div>)
  }
}


export default Index;

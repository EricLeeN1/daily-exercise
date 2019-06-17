import React from 'react'
import './App.css';
import Index from './modules/index'
import Form from './modules/form'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), isLoggedIn: false, number: [1, 2, 3, 4, 5, 6] };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <ul>
              <li>
                <Link to='/'>首页</Link>
              </li>
              <li>
                <Link to='/form'>表单</Link>
              </li>
              <li>
                <Link to='/state'>状态提升</Link>
              </li>
            </ul>
          </header>
          <main>
            <Route path="/" exact component={Index} />
            <Route path="/form/" component={Form} />
            {/* <Route path="/users/" component={Users} /> */}
          </main>
        </div>
      </Router>
    )
  }
}


export default App;

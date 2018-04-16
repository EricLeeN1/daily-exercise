import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
             <Provider store={store}>
                 <TodoApp/>
             </Provider>,
             document.getElementById('root')
        )
    }
}
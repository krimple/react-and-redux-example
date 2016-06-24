import React from 'react';
import {render} from 'react-dom';

import TodoListContainer from './components/todo-list-container';

class App extends React.Component {

    render() {
        return <TodoListContainer />;
    }

}

render(<App/>, document.getElementById('app'));

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import './bootstrap.css' ;
import TodoList from './components/TodoList';
//import App from './App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TodoList />, document.getElementById('root'));
registerServiceWorker();

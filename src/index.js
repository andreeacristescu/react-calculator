import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import "github-fork-ribbon-css/gh-fork-ribbon.css";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want the app to work offline and load faster,  change
// unregister() to register().
serviceWorker.unregister();
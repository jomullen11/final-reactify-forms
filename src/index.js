import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";

// import Layout from './Forms/CreateAccount';
// import Login from './Forms/Login';
// import ForgotPassword from './Forms/ForgotPassword';
// import Home from './Routes';

import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<ForgotPassword />,  document.getElementById('root'));
// ReactDOM.render(<Login />,  document.getElementById('root'));
// ReactDOM.render(<Layout />,  document.getElementById('root'));
// ReactDOM.render(<Home />,  document.getElementById('root'));
ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

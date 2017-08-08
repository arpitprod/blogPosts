import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import AddPost from './components/AddPost';
import IndexPost from './components/IndexPost';
import EditPost from './components/EditPost';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path = '/' component = {App} />
            <Route path='/add-post' component={AddPost} />
            <Route path='/index' component={IndexPost} />
            <Route path='/edit/:id' component={EditPost} />
        </div>
    </Router>,
    document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ProjectDetail from './components/project_detail';
import Menu from './components/menu';
import Footer from './components/footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './components/app';
import reducers from './reducers';
import About from './components/about';
import Contact from './components/contact';
const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
    <div>
    <BrowserRouter>
    <div>
    <Menu />
    <Switch>
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects/:id" component={ProjectDetail}/>
    <Route path="/" component={App} />
    </Switch>
    <Footer />
    </div>
    </BrowserRouter>
    </div>
    </Provider>
    , document.querySelector('.test'));

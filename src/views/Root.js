import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import MainTemplate from '../templates/MainTemplate';
import DictionariesList from '../views/DictionariesList';
import DictionaryView from './DictionaryView';
import LoginRegisterView from './LoginRegisterView';
import LearningView from './LearningView';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path="/" component={LoginRegisterView} />
          <Route exact path="/dictionaries" component={DictionariesList} />
          <Route path="/learning/:id" component={LearningView} />
          <Route exact path="/dictionary/:id" component={DictionaryView} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;

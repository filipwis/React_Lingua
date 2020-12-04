import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import MainTemplate from '../../templates/MainTemplate';
import DictionariesList from '../../views/DictionariesList/DictionariesList';
import DictionaryView from '../DictionaryView/DictionaryView';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path="/" component={DictionariesList} />
          <Route path="/dictionary/:id" component={DictionaryView} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;

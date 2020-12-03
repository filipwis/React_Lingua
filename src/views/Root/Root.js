import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from '../../templates/MainTemplate';
import DictionariesList from '../../views/DictionariesList/DictionariesList';
import DictionaryView from '../DictionaryView/DictionaryView';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={DictionariesList} />
        <Route exact path="/dictionary" component={DictionaryView} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;

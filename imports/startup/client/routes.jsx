import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import AdminContainer from '../../ui/layouts/admin-container.jsx';
import StockTicker from '../../ui/components/stock-ticker.jsx';
import HelloWorld from '../../ui/components/hello-world.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={HelloWorld}/>
    <Route path="/admin" component={AdminContainer}>
      <Route path="stock/:ticker" component={StockTicker}/>
    </Route>
  </Router>
);

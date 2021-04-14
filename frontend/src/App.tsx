import React from 'react';
import 'tailwindcss/tailwind.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductsView from './views/ProductsView';
import CartView from './views/CartView';
import LoginView from './views/LoginView';
import NotFound from './views/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <ProductsView></ProductsView>
          </Route>
          <Route path="/cart" exact>
            <CartView></CartView>
          </Route>
          <Route path="/profile" exact>
            <LoginView></LoginView>
          </Route>
          <Route path="/profile/settings" exact>
            <h2>User Settings</h2>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

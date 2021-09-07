import './App.css';

import Navbar from './components/navbar/navbar';
import ProductList from './screens/productslistscreen/productlist';
import Detail from './screens/detail/detail';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Cart from './screens/cart/cart';

function App() {

  
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" component={ProductList} exact/>
        <Route path="/cart" component={Cart} exact/>
        <Route path="/:id" component={Detail} exact/>

      </Switch>
    </Router>
  );
}

export default App;

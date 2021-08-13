import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import ProductDetails from './components/ProductDetails'
import Topbar from './components/Topbar'
import Cart from './components/Cart'
import Footer from './components/Footer'
import OrderConfirm from './components/OrderConfirm'

function App() {
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route path='/shoplane-website'exact component={Home} />
        <Route path='/shoplane-website/product/:id' component={ProductDetails} />
        <Route path='/shoplane-website/cart' component={Cart} />
        <Route path='/shoplane-website/orderconfirm' component={OrderConfirm} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App

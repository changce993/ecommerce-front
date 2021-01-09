import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { ThemeProvider, StyleReset } from "react-atomize";
import { ThemeProvider as StyledProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyles from './GlobalStyles';
import theme from './theme';
import './AOS';

import ProductsProvider from './context/products/productsContext';
import CartProvider from './context/cart/cartContext';

import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';

const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
const engine = new Styletron();

function App() {
  return (

    <ThemeProvider theme={theme}>
      <StyledProvider theme={theme}>
        <StyletronProvider value={engine} debug={debug} debugAfterHydration>
          <StyleReset />
          <GlobalStyles />

          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
          <ProductsProvider>
            <CartProvider>
              <Router>
                <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/products' component={Products} />
                <Route exact path='/cart' component={Cart} />
                </Switch>
              </Router>
            </CartProvider>
          </ProductsProvider>
        </StyletronProvider>
      </StyledProvider>
    </ThemeProvider>
  );
}

export default App;

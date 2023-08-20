import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import LoginPage from './components/LoginPage.jsx';
import Header from './components/Header.jsx';
import customTheme from './components/theme.jsx';
// import ProductDetailsPage from './ProductDetailsPage';
import ProductDetailsPage from './components/ProductDetailsPage';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Router>
        <Header />
        <Box p={4}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/details/product/:videoID" component={ProductDetailsPage} />
            <Route path="/login" exact component={LoginPage} />
          </Switch>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;

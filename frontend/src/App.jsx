import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import LoginPage from './LoginPage';
import Header from './Header';
import DetailVideo from './DetailVideo';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <Box p={4}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/detail/:id" element={<DetailVideo />} />
          </Switch>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;

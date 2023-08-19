import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from './theme';
import Header from './Header';

import ProductDetailsPage from './ProductDetailsPage';

const App = () => {
    return (
        <ChakraProvider theme={customTheme}>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/details/:productID" component={ProductDetailsPage} />
                    {/* Add more routes as needed */}
                </Switch>
            </Router>
        </ChakraProvider>
    );
};

export default App;
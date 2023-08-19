import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        brandGreen: {
            50: '#e1f4e0',
            100: '#c1e8c1',
            200: '#9bd69b',
            300: '#72c672',
            400: '#4db953', // The original color tokopedia
            500: '#419b44',
            600: '#358037',
            700: '#29652a',
            800: '#1d4b1e',
            900: '#123111',
        },
        GreenTokped: '#4DB953',
        // Add more colors here
    },
    fonts: {
        heading: 'Almarai, sans-s00AA5Berif',
        body: 'Varela Round, sans-serif',
    },
    // Add more theme customization here
});

export default theme;


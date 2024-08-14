import { Global, css } from '@emotion/react';

const GlobalStyle = () => (
    <Global
        styles={css`
            body {
                background-color: #000; /* Change the body background color to black */
                color: #FFF; /* Change the text color to white for better readability */
                
                margin: 0;
                padding: 0;
            }
        `}
    />
);

export default GlobalStyle;

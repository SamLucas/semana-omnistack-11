import { createGlobalStyle } from "styled-components";

export const Typography = createGlobalStyle`
  & @font-face {
    font-family: 'Scada';
    font-style: normal;
    font-weight: 400;
    src: local('Scada Regular'), local('Scada-Regular'), url(https://fonts.gstatic.com/s/scada/v6/RLpxK5Pv5qumeVJvzTQKbVvu.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
`;

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
html,
body,
#root {
  min-height: 100%;
}
body {
  background: #f0f0f5;
  background-size: cover;
  -webkit-font-smoothing: antialiased !important;
}
body,
input,
textarea,
button {
  font-family: "Scada", Arial, Arial, Helvetica, sans-serif;
  font-size: 14px;
}

form input {
  width: 100%;
  height: 60px;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 3px;
  padding: 0 24px;
}

.button {
  width: 100%;
  height: 60px;
  background: #e02041;
  border: 0;
  border-radius: 3px;
  color: #fff;
  font-weight: bold;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s;
}

.button:hover {
  filter: brightness(90%);
}

.back-link {
  display: flex;
  align-items: center;
  margin-top: 40px;
  color: #41414d;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  transition: opacity 0.2s;
}

.back-link:hover {
  opacity: 0.8;
}

.back-link svg {
  margin-right: 8px;
}
`;



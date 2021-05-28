import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

import slick from './slick'

export const themes = {
  default: {
    name: 'Défaut',
    colors: {
      main: '#000091',
      second: '231, 237, 248',
      gradientStart: '#edf1f8',
      gradientEnd: '#f7f9fd',
      background: '#ffffff',
      text: '#383838',
      bon: '#4BF0E6',
      moyen: '#4FCBAD',
      degrade: '#F0E65F',
      mauvais: '#FF5354',
      'tres-mauvais': '#A83559',
      'extremement-mauvais': '#7D237D',
      raep: {
        1: '#75F94C',
        2: '#387C21',
        3: '#FFFD53',
        4: '#EF8541',
        5: '#EA3421',
      },
      error: '#FFF1EF',
    },
    fonts: {
      body: '"Marianne", sans-serif',
      title: '"Marianne", sans-serif',
    },
    mq: {
      small: `@media screen and (max-width: ${31.75}rem)`,
      medium: `@media screen and (max-width: ${75}em)`,
      mediumLandscape: `@media screen and (orientation: landscape) and (max-width: ${62}px)`,
      mediumPortrait: `@media screen and (orientation: portrait) and (max-width: ${62}px)`,
      large: `@media screen and (min-width: ${92}em)`,
      xlarge: `@media screen and (min-width: ${2000}px)`,
    },
  },
  classic: {
    name: 'Classique',
    colors: {
      main: '#EF0D50',
      second: '#ffffff',
      ter: '#32337B',
      quad: '#ffffff',
      background: '#ffffff',
      text: '#32337B',
    },
    fonts: {
      body: '"Marianne", sans-serif',
      title: '"Marianne", sans-serif',
    },
    mq: {
      small: `@media screen and (max-width: ${46}em)`,
      medium: `@media screen and (max-width: ${75}em)`,
      mediumLandscape: `@media screen and (orientation: landscape) and (max-width: ${62}px)`,
      mediumPortrait: `@media screen and (orientation: portrait) and (max-width: ${62}px)`,
      large: `@media screen and (min-width: ${92}em)`,
      xlarge: `@media screen and (min-width: ${2000}px)`,
    },
  },
  night: {
    name: 'Nuit',
    colors: {
      main: '#92F2D2',
      second: '#1e1e1e',
      ter: '#ffffff',
      quad: '#1e1e1e',
      background: '#1e1e1e',
      text: '#ffffff',
    },
    fonts: {
      body: '"Marianne", sans-serif',
      title: '"Marianne", sans-serif',
    },
    mq: {
      small: `@media screen and (max-width: ${46}em)`,
      medium: `@media screen and (max-width: ${75}em)`,
      mediumLandscape: `@media screen and (orientation: landscape) and (max-width: ${62}px)`,
      mediumPortrait: `@media screen and (orientation: portrait) and (max-width: ${62}px)`,
      large: `@media screen and (min-width: ${92}em)`,
      xlarge: `@media screen and (min-width: ${2000}px)`,
    },
  },
  simple: {
    name: 'Simple',
    colors: {
      main: '#000091',
      second: '#ffffff',
      ter: '#1e1e1e',
      quad: '#ffffff',
      background: '#ffffff',
      text: '#1e1e1e',
    },
    fonts: {
      body: '"Marianne", sans-serif',
      title: '"Marianne", sans-serif',
    },
    mq: {
      small: `@media screen and (max-width: ${46}em)`,
      medium: `@media screen and (max-width: ${75}em)`,
      mediumLandscape: `@media screen and (orientation: landscape) and (max-width: ${62}px)`,
      mediumPortrait: `@media screen and (orientation: portrait) and (max-width: ${62}px)`,
      large: `@media screen and (min-width: ${92}em)`,
      xlarge: `@media screen and (min-width: ${2000}px)`,
    },
  },
}

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  ${slick}

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-size: ${(props) => props.theme.size}px;
    font-family: ${(props) => props.theme.fonts.body};
    line-height: 1.4;
    text-rendering: geometricPrecision;

    @media screen and (max-width: ${(props) => 31.75 * props.theme.size}px) {
      font-size: 3.15vw;
    }
  }

  body {
    background-color: #${(props) => props.theme.background};
    color: ${(props) => props.theme.colors.text};
  } 

  *, *:before, *:after {
    margin-top: 0;
    box-sizing: inherit;
  }

  #root {
    overflow: hidden;
    width: 100%;
    position: relative;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    font-family: ${(props) => props.theme.fonts.title};
    font-weight: 800;
    line-height: 1.2;
  }

  a {
    color: ${(props) => props.theme.colors.main};
  }

  option {
    color: #010101;
  }

  strong {
    color: ${(props) => props.theme.colors.main};
  }
`

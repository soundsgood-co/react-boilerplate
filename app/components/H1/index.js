import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles.css';

function H1(props) {
  return (
    <h1 styleName="heading1" {...props} />
  );
}

export default CSSModules(H1, styles); // eslint-disable-line new-cap

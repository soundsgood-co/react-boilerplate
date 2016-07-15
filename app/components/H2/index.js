import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles.css';

export function H2(props) {
  return (
    <h2 styleName="heading2" {...props} />
  );
}

export default CSSModules(H2, styles); // eslint-disable-line new-cap

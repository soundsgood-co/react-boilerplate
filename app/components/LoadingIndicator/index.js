import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles.css';

function LoadingIndicator() {
  return (
    <div>
      <div styleName="sk-fading-circle">
        <div styleName="sk-circle"></div>
        <div styleName="sk-circle2"></div>
        <div styleName="sk-circle3"></div>
        <div styleName="sk-circle4"></div>
        <div styleName="sk-circle5"></div>
        <div styleName="sk-circle6"></div>
        <div styleName="sk-circle7"></div>
        <div styleName="sk-circle8"></div>
        <div styleName="sk-circle9"></div>
        <div styleName="sk-circle10"></div>
        <div styleName="sk-circle11"></div>
        <div styleName="sk-circle12"></div>
      </div>
    </div>
  );
}

export default CSSModules(LoadingIndicator, styles); // eslint-disable-line new-cap

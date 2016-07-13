/**
 * A link to a certain page, an anchor tag
 */

import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles.css';

function A(props) {
  return (
    <a
      className={props.className}
      styleName="link"
      {...props}
    />
  );
}

A.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default CSSModules(A, styles); // eslint-disable-line new-cap

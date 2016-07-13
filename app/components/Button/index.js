/**
 *
 * Button.react.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles.css';

function Button(props) {
  const className = props.className;
  // Render an anchor tag
  let button = (
    <a className={className} styleName="button" href={props.href} onClick={props.onClick}>{props.children}</a>
  );

  // If the Button has a handleRoute prop, we want to render a button
  if (props.handleRoute) {
    button = (
      <button className={className} styleName="button" onClick={props.handleRoute} >{props.children}</button>
    );
  }

  return (
    <div styleName="buttonWrapper">
      {button}
    </div>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default CSSModules(Button, styles); // eslint-disable-line new-cap

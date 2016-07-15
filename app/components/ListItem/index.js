import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles.css';

export function ListItem(props) {
  return (
    <li className={props.className} styleName="item">
      <div styleName="itemContent">
        {props.item}
      </div>
    </li>
  );
}

ListItem.propTypes = {
  className: React.PropTypes.string,
  item: React.PropTypes.any,
};

export default CSSModules(ListItem, styles); // eslint-disable-line new-cap

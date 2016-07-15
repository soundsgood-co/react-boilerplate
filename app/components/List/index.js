import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './styles.css';

export function List(props) {
  const ComponentToRender = props.component;
  let content = (<div></div>);

  // If we have items, render them
  if (props.items) {
    content = props.items.map((item, index) => (
      <ComponentToRender key={`item-${index}`} item={item} />
    ));
  } else {
    // Otherwise render a single component
    content = (<ComponentToRender />);
  }

  return (
    <div styleName="listWrapper">
      <ul styleName="list">
        {content}
      </ul>
    </div>
  );
}

List.propTypes = {
  component: React.PropTypes.func.isRequired,
  items: React.PropTypes.array,
};

export default CSSModules(List, styles); // eslint-disable-line new-cap

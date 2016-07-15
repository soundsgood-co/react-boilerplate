/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';
import CSSModules from 'react-css-modules';

import Button from 'components/Button';
import H1 from 'components/H1';

import styles from './styles.css';

export class FeaturePage extends React.Component {

  /**
   * Changes the route
   *
   * @param  {string} route The route we want to go to
   */
  openRoute = (route) => {
    this.props.changeRoute(route);
  };

  /**
   * Changed route to '/'
   */
  openHomePage = () => {
    this.openRoute('/');
  };

  render() {
    return (
      <div>
        <Helmet
          title="Feature Page"
          meta={[
            { name: 'description', content: 'Feature page of React.js Boilerplate application' },
          ]}
        />
        <H1>Features</H1>
        <ul styleName="list">
          <li styleName="listItem">
            <p styleName="listItemTitle">Quick scaffolding</p>
            <p>Automate the creation of components, containers, routes, selectors
            and sagas - and their tests - right from the CLI!</p>
          </li>

          <li styleName="listItem">
            <p styleName="listItemTitle">Instant feedback</p>
            <p>Enjoy the best DX and code your app at the speed of thought! Your
            saved changes to the CSS and JS are reflected instantaneously
            without refreshing the page. Preserve application state even when
            you update something in the underlying code!</p>
          </li>

          <li styleName="listItem">
            <p styleName="listItemTitle">Predictable state management</p>
            <p>Unidirectional data flow allows for change logging and time travel
            debugging.</p>
          </li>

          <li styleName="listItem">
            <p styleName="listItemTitle">Next generation JavaScript</p>
            <p>Use template strings, object destructuring, arrow functions, JSX
            syntax and more, today.</p>
          </li>

          <li styleName="listItem">
            <p styleName="listItemTitle">Next generation CSS</p>
            <p>Write composable CSS that's co-located with your components for
            complete modularity. Unique generated class names keep the
            specificity low while eliminating style clashes. Ship only the
            styles that are on the page for the best performance.</p>
          </li>

          <li styleName="listItem">
            <p styleName="listItemTitle">Industry-standard routing</p>
            <p>It's natural to want to add pages (e.g. `/about`) to your
            application, and routing makes this possible.</p>
          </li>

          <li styleName="listItem">
            <p styleName="listItemTitle">Offline-first</p>
            <p>The next frontier in performant web apps: availability without a
            network connection from the instant your users load the app.</p>
          </li>
        </ul>
        <Button handleRoute={this.openHomePage}>Home</Button>
      </div>
    );
  }
}
FeaturePage.propTypes = {
  changeRoute: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
  };
}

export const FeaturePageWithStyles = CSSModules(FeaturePage, styles); // eslint-disable-line new-cap
export default connect(null, mapDispatchToProps)(FeaturePageWithStyles);

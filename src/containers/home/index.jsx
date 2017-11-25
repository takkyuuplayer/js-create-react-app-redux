import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Welcome Home!</p>
    <button onClick={() => props.changePage()}>
      Go to about page via redux
    </button>
  </div>
);

Home.propTypes = {
  changePage: React.PropTypes.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('./about-us'),
}, dispatch);

export default connect(null, mapDispatchToProps)(Home);

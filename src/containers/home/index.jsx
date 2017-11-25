import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { increment, incrementAsync, decrement, decrementAsync } from '../../modules/counter';

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Count: {props.count}</p>

    <p>
      <button onClick={props.increment} disabled={props.isIncrementing}>Increment</button>
      <button
        onClick={props.incrementAsync}
        disabled={props.isIncrementing}
      >Increment Async
      </button>
    </p>

    <p>
      <button onClick={props.decrement} disabled={props.isDecrementing}>Decrementing</button>
      <button
        onClick={props.decrementAsync}
        disabled={props.isDecrementing}
      >
        Decrement Async
      </button>
    </p>

    <p><button onClick={() => props.changePage()}>Go to about page via redux</button></p>
  </div>
);


Home.propTypes = {
  count: React.PropTypes.number.isRequired,
  isIncrementing: React.PropTypes.bool.isRequired,
  isDecrementing: React.PropTypes.bool.isRequired,

  increment: React.PropTypes.func.isRequired,
  incrementAsync: React.PropTypes.func.isRequired,
  decrement: React.PropTypes.func.isRequired,
  decrementAsync: React.PropTypes.func.isRequired,
  changePage: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  ...state.counter,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('./about-us'),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);

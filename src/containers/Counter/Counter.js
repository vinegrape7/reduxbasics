import React, { Component } from "react";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    console.log(this.props.results);
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAdd} />
        <CounterControl label="Subtract 5" clicked={this.props.onSubstract} />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.counter)}>
          {" "}
          Store Result
        </button>
        <ul>
          {this.props.results.map(d => (
            <li key={d.id} onClick={() => this.props.onDeleteStoreResult(d.id)}>
              {d.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.ctr.counter,
    results: state.res.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => {
      return dispatch({ type: "INCREMENT" });
    },
    onDecrementCounter: () => {
      return dispatch({ type: "DECREMENT" });
    },
    onAdd: () => {
      return dispatch({ type: "ADD", value: 5 });
    },
    onSubstract: () => {
      return dispatch({ type: "SUBSTRACT", value: 5 });
    },
    onStoreResult: result => {
      return dispatch({ type: "STORE_RESULT", result: result });
    },
    onDeleteStoreResult: id => {
      return dispatch({ type: "DELETE_STORE_RESULT", id: id });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

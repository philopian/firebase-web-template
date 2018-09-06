import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Wrapper } from "./styles.js";

// import { exampleMethod } from "../../actions/some-reducer";

export class HelloContainer extends Component {
  state = {
    yy: ""
  };

  render() {
    return (
      <Wrapper>
        <h1>Hello containter!</h1>
        <p>Container components connect to the redux store for props</p>
      </Wrapper>
    );
  }
}

HelloContainer.propTypes = {
  // exampleProp: PropTypes.string.isRequired,
  // exampleMethod: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  // exampleProp: state.exampleProp,
});
const mapDispatchToProps = dispatch => ({
  // exampleMethod: () => dispatch(exampleMethod())
});
export default connect(mapStateToProps, mapDispatchToProps)(HelloContainer);

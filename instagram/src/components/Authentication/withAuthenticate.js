import React, { Component} from "react";

const withAuthenticate = ComponentOne => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
          loggedIn: false
      }
    }

    render() {
      return (
        <div>
          <ComponentOne data={this.props.data} search={this.props.search} />
        </div>
      );
    }
  };
};

export default withAuthenticate;

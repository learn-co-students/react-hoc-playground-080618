import React from "react";

function withAuth(WrappedComponent) {
  return class WithAuth extends React.Component {
    render() {
      return this.props.authStatus ? (
        <WrappedComponent {...this.props} />
      ) : null;
    }
  };
}

export default withAuth;

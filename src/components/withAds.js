import React from "react";

function withAds(WrappedComponent) {
  return class WithAds extends React.Component {
    state = {
      clickCounts: 0
    };

    handleClick = event => {
      this.setState(prevState => ({ clickCounts: prevState.clickCounts + 1 }));
    };

    render() {
      return (
        <span onClick={this.handleClick}>
          {this.state.clickCounts < 3 ? (
            <WrappedComponent {...this.props} />
          ) : (
            <h1>JavaScript. The best language in the world</h1>
          )}
        </span>
      );
    }
  };
}

export default withAds;

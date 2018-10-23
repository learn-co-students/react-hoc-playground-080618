import React from "react";

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.loginInput = React.createRef();
  }

  state = {
    authenticated: false
  };

  handleLogin = event => {
    event.preventDefault();
    if (this.loginInput.current.value === "pass") {
      this.setState({ authenticated: true }, () => {
        alert("Welcome to our secret likes");
      });
    } else {
      alert("The password is invalid");
    }
  };

  handleLogout = () => {
    this.setState({ authenticated: false });
  };

  render() {
    const Component = this.props.component;
    return (
      <>
        <div>
          {this.state.authenticated ? (
            <p onClick={this.handleLogout}>Logout</p>
          ) : (
            <form onSubmit={this.handleLogin}>
              <input type="password" ref={this.loginInput} />
            </form>
          )}
        </div>
        {this.props.collection.map(collectionElement => (
          <Component
            key={collectionElement}
            data={collectionElement}
            authStatus={this.state.authenticated}
          />
        ))}
      </>
    );
  }
}

const secretLikes = ["Pizza prosciutto e panna", "U Fleků", "Caffee macchiato"];

const Liked = props => <h3>I kind of really liked {props.data}</h3>;

const likesElements = () => {
  return <Auth collection={secretLikes} component={Liked} />;
};

export default likesElements;

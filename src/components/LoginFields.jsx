import React, { Component } from "react";
import { TextInput } from "react-native";

class LoginField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleEmailChange(text) {
    this.setState({ email: text });
  }

  handlePasswordChange(text) {
    this.setState({ password: text });
  }

  render() {
    return (
      <>
        <TextInput
          placeholder="Enter your email"
          onChangeText={this.handleEmailChange}
        />

        <TextInput
          placeholder="Enter your password"
          secureTextEntry={true} // hides the text entered in the field
          onChangeText={this.handlePasswordChange}
        />
      </>
    );
  }
}

export default LoginField;

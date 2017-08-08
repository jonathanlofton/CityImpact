import React, { Component } from 'react';
import { Text, View, TextInput} from 'react-native';

class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    return(
      <View>
        <TextInput
          placeholder="hello"
        />
      </View>

    );
  }

}

export default SessionForm;

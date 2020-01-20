import React from 'react';
import { View, Text } from 'react-native';

const Todo = props => {
  return (
    <View style={{ backgroundColor: '#eaeaea', width: 300, margin: 5 }}>
      <Text>{props.text}</Text>
    </View>
  );
};

export default Todo;

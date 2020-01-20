import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList
} from 'react-native';
import Todo from './Todo';

export default function App() {
  const [textInput, setTextInput] = useState('');
  const [todos, setTodos] = useState([]);

  const pressHandler = () => {
    setTodos([textInput, ...todos]);
  };
  const typingHandler = value => {
    setTextInput(value);
  };

  return (
    <View style={styles.container}>
      <Text>HI</Text>
      <TextInput
        style={{ borderWidth: 1, width: 300 }}
        onChangeText={typingHandler}
        value={textInput}
      />
      <Button title="Add To Do" onPress={pressHandler} />
      <FlatList data={todos} renderItem={todo => <Todo text={todo.item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  }
});

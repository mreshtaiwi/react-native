import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import Item from './components/Item';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [newUser, setNewUser] = useState('');
  const [users, setUsers] = useState([]);

  const textHandler = (userValue) => {
    setNewUser(userValue);

  }
  const addNameHandler = () => {
    setUsers([...users, newUser]);
    setNewUser('');
  }
  const removeHandler = (userRemove) => {
    const newUser = users.filter((user) => user !== userRemove)
    setUsers(newUser);
  }
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="add your name" onChangeText={textHandler} value={newUser} />
      <Button title='Add Name' onPress={addNameHandler} />
      <View>
        {/* {
          users.map((user, idx) => {
            return <Text key={idx} onPress={() => removeHandler(user)} >{user}</Text>
          })
        } */}
        <FlatList
          data={users}
          renderItem={(itemData) => (

            // <View key={itemData.index}>
            //   <Text onPress={() => removeHandler(itemData.item)}>{itemData.item}</Text>
            // </View>

            <Item title={itemData.item} onDelete={removeHandler} />
          )}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    color: "red",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    width: "80%",
  }
});

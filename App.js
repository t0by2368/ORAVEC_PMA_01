import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View , FlatList} from 'react-native';
import { useState } from 'react';
import Item from './src/components/Item';

export default function App() {
 
  const [text, setText] = useState("");
  const [tasklist, setTasklist] = useState([]);

  function handleInputChange(text) {
  
    setText(text);

  }
  function handleAddItem() {

    setTasklist([...tasklist, text]);
  }

  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>
        <TextInput onChangeText={handleInputChange} style={styles.input} placeholder="Zadaj ulohu" />
        <Button onPress={handleAddItem} title="ADD"/>
      </View>

      <FlatList
        data={tasklist}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
        <StatusBar style="auto" />
      </View>

    
  );
}

const styles = StyleSheet.create({

  inputContainer: {
    paddingHorizontal: 10,
    margin:4,
    flex:1,
    alignItems:"center",
    justifyContent:"space-between",
    flexDirection:"row",



  },

  taskContainer: {
    margin:4,
    flex:3,
    borderTopWidth:3,
    padding:24},

  container: {
    flex: 1,



  },
  input: {borderWidth: 3, borderColor:"red", borderRadius: 10, width: "80%",},
});
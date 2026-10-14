import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Zadaj ulohu" />
        <Button title="ADD"/>
      </View>

      <View style={styles.taskContainer}>
        <Text>ULOHY:</Text>
        <StatusBar style="auto" />
      </View>

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
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-paper";
import { StyleSheet } from "react-native";

export default function LoginScreen({ onLogin }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    // perform login action here
    // assuming the login is successful, call onLogin function to update loggedIn state
    onLogin();
  }

  return (
    <ScrollView style={styles.main} keyboardShouldPersistTaps='handled' scrollEnabled={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Personal information</Text>
        <Text>{email}</Text>
        <Text>{password}</Text>
        <TextInput onChangeText={setEmail} style={styles.inputText} placeholder="Email" mode="outlined" selectionColor="#0aaaaa" activeOutlineColor="#0aaaaa" autoCapitalize='none' keyboardType="email-address" />
        <TextInput onChangeText={setPassword} style={styles.inputText} placeholder="Password" mode="outlined" selectionColor="#0aaaaa" activeOutlineColor="#0aaaaa" autoCapitalize='none' secureTextEntry />
        <TouchableOpacity style={styles.button} onPress={handleLogin}><Text style={styles.button_text}>Login</Text></TouchableOpacity>
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  main: {
  },
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 50,
    marginTop: 150
  },
  inputText: {
    width: "80%",
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: 'white',
    borderRadius: 20
  },
  button_text: {
    fontWeight:'bold',
    fontSize: 18
  }
})

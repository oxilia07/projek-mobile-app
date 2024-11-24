import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const SignInScreen = ({navigation}: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Welcome back to Tastefull</Text>
        <Text>Name</Text>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <Text>Email</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={styles.input}
        />
        <Text
          style={styles.forgotPassword}
          onPress={() => navigation.navigate('ForgotPassword')}>
          Forgot your password?
        </Text>
      </View>
      <Button title="Login" color="#4CAF50" onPress={() => {}} />
      <TouchableOpacity
        style={styles.newAccount}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.newAccountText}>Create New Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 80,
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 32,
    color: '#333333',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 80,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    marginTop: 5,
  },
  forgotPassword: {
    color: '#333333',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  newAccount: {
    marginTop: 20,
    alignItems: 'center',
  },
  newAccountText: {
    color: '#333333',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignInScreen;

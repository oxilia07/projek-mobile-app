import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const SignUpScreen = ({navigation}: any) => {
  const [formData, setFormData] = useState({name: '', email: '', password: ''});

  const handleChange = (key: string, value: string) => {
    setFormData({...formData, [key]: value});
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>
          Welcome to Tastefull. Complete your registration to experience the
          food that deserve a good taste.
        </Text>
        <Text>Name</Text>
        <TextInput
          placeholder="Name"
          value={formData.name}
          onChangeText={value => handleChange('name', value)}
          style={styles.input}
        />
        <Text>Email</Text>
        <TextInput
          placeholder="Email"
          value={formData.email}
          onChangeText={value => handleChange('email', value)}
          keyboardType="email-address"
          style={styles.input}
        />
        <Text>Password</Text>
        <TextInput
          placeholder="Password"
          value={formData.password}
          onChangeText={value => handleChange('password', value)}
          secureTextEntry
          style={styles.input}
        />
      </View>
      <Button
        title="Create Account"
        color="#4CAF50"
        onPress={() => {
          navigation.navigate('SignIn');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
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
});

export default SignUpScreen;

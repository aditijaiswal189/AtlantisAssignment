import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert, Text } from "react-native";
import { useAuthContext } from "../context/AuthContext";
import { validate } from "../utils/validate";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { state, signIn } = useAuthContext();
  const handleLogin = () => {
    if (!email || !password) {
      setErrors({
        emailError: email ? "" : "Please Enter Email",
        passwordError: password ? "" : " Please Enter Password",
      });

      return;
    }
    if (email) {
      const x = validate(email);
      if (!x)
        setErrors((i) => ({
          ...i,
          emailError: "Please Enter correct email",
          password: "",
        }));
      else {
        setErrors({});
      }
    }
    signIn(email, password);
    setErrors({});
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {Object.keys(errors).length > 0 ? <Text>{errors.emailError} </Text> : ""}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {Object.keys(errors).length > 0 ? (
        <Text>{errors.passwordError} </Text>
      ) : (
        ""
      )}
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#f8f8f8",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingLeft: 8,
  },
  buttonContainer: {
    marginTop: 12,
  },
});

export default LoginScreen;

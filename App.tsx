import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const maxHeartRate = calcHeart(age);
  const lowHeartRate = 
  maxHeartRate !== null ? Math.round(maxHeartRate * 0.65) : null;

  const highHeartRate = 
  maxHeartRate !== null ? Math.round(maxHeartRate * 0.85) : null;
  
  return (
    <View style={styles.container}>
      <Text>Heart Rate Limits Calculator</Text>
      <Text>Enter your age</Text>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        placeholder="Age"
        accessibilityLabel="Age"
        value={age}
        onChangeText={setAge}
      />
      {lowHeartRate !== null && (
        <Text style={styles.result}>
          lower limit {lowHeartRate} bpm.
        </Text>
      )}
      {highHeartRate !== null && (
        <Text style={styles.result}>
          lower limit {highHeartRate} bpm.
        </Text>
      )}
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
  input: {
    width: 160,
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 6,
    padding: 10,
    marginTop: 12,
  },
  result: {
    marginTop: 20,
    textAlign: 'center',
  },
});

function calcHeart(age: string): number | null {
  const parsedAge = Number(age);

  if (!age || !Number.isInteger(parsedAge) || parsedAge <= 0) {
    return null;
  }

  return 220 - parsedAge;
}
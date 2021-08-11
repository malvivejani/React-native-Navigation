import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import Navigation from './src/Navigation';

export default function App() {

  const [couserGoal, setCouserGoal] = useState('');
  const [allCourses, setAllCourses] = useState<any>([]);

  return (
    <Navigation />
  );
}

const styles = StyleSheet.create({
  container: {
  },
  safeArea: {
    marginTop: 40,
    padding: 20,
  },
  courseGoal: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View, DevSettings } from 'react-native';
import Navigation from './src/Navigation';
import ErrorBoundary from 'react-native-error-boundary'
import * as Sentry from 'sentry-expo';

export default function App() {

  const [couserGoal, setCouserGoal] = useState('');
  const [allCourses, setAllCourses] = useState<any>([]);

  const myErrorHandler = (error: Error, info: { componentStack: string }) => {
    Sentry.Native.captureException({ error, info });
  }

  const ErrorFallback = ({ error, resetErrorBoundary }: any) => {
    return (
      <View style={{ height: '100%', backgroundColor: 'pink', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30, marginBottom: 20 }}>Please try again!!!</Text>
        <Button title="try again" onPress={() => DevSettings.reload()}></Button>
      </View>
    )
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Navigation />
    </ErrorBoundary>
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

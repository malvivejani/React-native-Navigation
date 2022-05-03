import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import Navigation from './src/Navigation';
// import ErrorBoundary from 'react-native-error-boundary';
// import * as Sentry from 'sentry-expo';

export default function App() {

  const [couserGoal, setCouserGoal] = useState('');
  const [allCourses, setAllCourses] = useState<any>([]);

  const myErrorHandler = (error: Error, info: { componentStack: string }) => {
    // Sentry.Native.captureException({ error, info });
  }

  const ErrorFallback = ({ error, resetErrorBoundary }: any) => {
    return (
      <View>
        <View>
          <Text>ERROR:</Text>
        </View>
        <View>
          <Text>{error.message}</Text>
        </View>
        <Button onPress={resetErrorBoundary} title="Try again"></Button>
      </View>
    )
  };

  return (
    // <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
    <Navigation />
    // </ErrorBoundary>
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

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

// The below import is not needed but it is is recommended to include it
import Optional from 'react-native-optional';

const App = () => {
  const checkWithBooleanTrue = true;
  const checkWithBooleanFalse = false;
  const checkWithIntTrue = 1;
  const checkWithObjectFalse = null;
  return (
    <View style={styles.sectionContainer}>
      <Optional test={checkWithBooleanTrue}>
        <Text style={styles.sectionTitle}>
          This should show (checkWithBooleanTrue)
        </Text>
      </Optional>

      <Optional test={checkWithBooleanFalse}>
        <Text style={styles.sectionTitle}>
          This should NOT show (checkWithBooleanFalse)
        </Text>
      </Optional>

      <Optional test={checkWithIntTrue || checkWithObjectFalse}>
        <Text style={styles.sectionTitle}>
          This should show (checkWithIntTrue || checkWithObjectFalse)
        </Text>
      </Optional>

      <Optional test={checkWithIntTrue && checkWithObjectFalse}>
        <Text style={styles.sectionTitle}>
          This should NOT show (checkWithIntTrue && checkWithObjectFalse)
        </Text>
      </Optional>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 50,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 30,
  },
});

export default App;

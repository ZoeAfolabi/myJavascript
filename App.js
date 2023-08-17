// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Hello! Welcome to Class</Text>
      <Text style={styles.text2}>Welcome to Mobile World</Text>
      <View style={styles.container1}>
        <Text style={styles.text3}>Mobile World</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.text4}>Research in Motion</Text>
      </View>
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
    marginTop: 25,
  },
  container1: {
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 200,
    minWidth: 350,
    marginTop: 15,
    marginBottom: 80,
  },
  container2: {
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 120,
    minWidth: 400,
    marginTop: 75,
    padding: 10,
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 55,
    textAlign: 'center',
    marginTop: 120
  },
  text2: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  text3: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  text4: {
    fontSize: 12,
    textAlign: 'center',
    color: "#fff",
  },
});
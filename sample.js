import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Formik} from 'formik';

export default function sample() {
  return (
    <View style={styles.align}>
      <Text>Hello</Text>
      <Formik initialValues={{email: ''}}></Formik>
      <TextInput name="email" placeholder="email..." />
    </View>
  );
}

const styles = StyleSheet.create({
  align: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

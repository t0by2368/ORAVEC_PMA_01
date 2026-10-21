import {StyleSheet, Text,Pressable} from 'react-native';
import React, { useState } from 'react';

export default function Item({ title }) {
    const [isBlue, setIsBlue] = useState(false);
    return (
    <Pressable
      style={[
        styles.item,
        { backgroundColor: isBlue ? 'blue' : 'red' }
      ]}
      onPress={() => setIsBlue(!isBlue)}
    >
      <Text>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    item: {
        padding: 20,
        margin: 8,
        backgroundColor: '#ff0015',
        borderRadius: 12,
    }
})
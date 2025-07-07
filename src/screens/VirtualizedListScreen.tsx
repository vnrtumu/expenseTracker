import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, VirtualizedList } from 'react-native';
import { normalize } from '../utils/scaling';

const getItem = (data: any, index: number) => {
  return {
    id: Math.random().toString(12).substring(0),
    title: `Item ${index + 1}`
  }
}

const getItemCount = (data: any) => {
  return 1000;
}

const Item = ({ title }: { title: string }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const VirtualizedListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <VirtualizedList
        initialNumToRender={4}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: normalize(20),
  },
  item: {
    backgroundColor: '#f9c2ff',
    height: normalize(150),
    justifyContent: 'center',
    marginVertical: normalize(8),
    marginHorizontal: normalize(16),
    padding: normalize(20),
  },
  title: {
    fontSize: normalize(32),
  },
});

export default VirtualizedListScreen;

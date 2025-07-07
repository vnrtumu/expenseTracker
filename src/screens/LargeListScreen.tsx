// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { FlashList } from '@shopify/flash-list';

// // Generate a large list of data
// const generateData = (count: number) => {
//   const data = [];
//   for (let i = 0; i < count; i++) {
//     data.push({ id: `item-${i}`, text: `Item ${i + 1}` });
//   }
//   return data;
// };

// // Memoized item component to prevent unnecessary re-renders
// const MemoizedItem = React.memo(
//   ({ item }: { item: { id: string; text: string } }) => (
//     <View style={styles.item}>
//       <Text>{item.text}</Text>
//     </View>
//   ),
// );

// const LargeListScreen = () => {
//   const data = React.useMemo(() => generateData(10000), []);

//   const renderItem = React.useCallback(
//     ({ item }: { item: { id: string; text: string } }) => (
//       <MemoizedItem item={item} />
//     ),
//     [],
//   );

//   return (
//     <View style={styles.container}>
//       <FlashList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//         estimatedItemSize={ITEM_HEIGHT}
//         drawDistance={500}
//         disableAutoLayout={true}
//       />
//     </View>
//   );
// };

// const ITEM_HEIGHT = 61; // Approximate height of your item (padding + text)

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   item: {
//     height: ITEM_HEIGHT,
//     padding: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     justifyContent: 'center',
//   },
// });

// export default LargeListScreen;

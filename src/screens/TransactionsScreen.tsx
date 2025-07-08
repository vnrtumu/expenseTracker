import React, { useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Animated,
} from 'react-native';
import { normalize } from '../utils/scaling';

interface Transaction {
  id: string;
  description: string;
  amount: number;
  date: string;
}

const TransactionsScreen = ({ navigation }: { navigation: any }) => {
  // Mock data for all transactions
  const allTransactions: Transaction[] = [
    { id: '1', description: 'Groceries', amount: -50.0, date: '2025-06-20' },
    { id: '2', description: 'Salary', amount: 2000.0, date: '2025-06-19' },
    { id: '3', description: 'Rent', amount: -800.0, date: '2025-06-18' },
    { id: '4', description: 'Coffee', amount: -4.5, date: '2025-06-18' },
    {
      id: '5',
      description: 'Freelance Work',
      amount: 300.0,
      date: '2025-06-17',
    },
    { id: '6', description: 'Dinner Out', amount: -75.0, date: '2025-06-16' },
  ];

  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const listener = navigation.addListener('focus', () => {
      anim.setValue(0);
      Animated.timing(anim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start();
    });

    return listener;
  }, [anim, navigation]);

  const translateY = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [30, 0], // Slide up from 30 pixels below
  });

  const renderTransaction = ({ item }: { item: Transaction }) => (
    <View style={styles.transactionItem}>
      <View>
        <Text style={styles.transactionDescription}>{item.description}</Text>
        <Text style={styles.transactionDate}>{item.date}</Text>
      </View>
      <Text style={item.amount > 0 ? styles.incomeText : styles.expenseText}>
        ${item.amount.toFixed(2)}
      </Text>
    </View>
  );

  return (
    <Animated.View style={{ flex: 1, opacity: anim, transform: [{ translateY }] }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>All Transactions</Text>
        </View>
        <FlatList
          data={allTransactions}
          renderItem={renderTransaction}
          keyExtractor={item => item.id}
          style={styles.transactionList}
        />
      </SafeAreaView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#6200ee',
    padding: normalize(20),
    paddingTop: normalize(40),
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: normalize(24),
    fontWeight: 'bold',
  },
  transactionList: {
    flex: 1,
    marginHorizontal: normalize(10),
    marginTop: normalize(10),
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: normalize(15),
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    borderRadius: normalize(5),
    marginBottom: normalize(10),
  },
  transactionDescription: {
    fontSize: normalize(16),
    fontWeight: '500',
  },
  transactionDate: {
    fontSize: normalize(12),
    color: '#888',
    marginTop: normalize(4),
  },
  incomeText: {
    fontSize: normalize(16),
    color: '#4caf50',
    fontWeight: 'bold',
  },
  expenseText: {
    fontSize: normalize(16),
    color: '#f44336',
    fontWeight: 'bold',
  },
});

export default TransactionsScreen;

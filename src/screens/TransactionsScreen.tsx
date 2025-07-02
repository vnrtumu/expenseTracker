import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';

const TransactionsScreen = () => {
  // Mock data for all transactions
  const allTransactions = [
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

  const renderTransaction = ({ item }) => (
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#6200ee',
    padding: 20,
    paddingTop: 40,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  transactionList: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    borderRadius: 5,
    marginBottom: 10,
  },
  transactionDescription: {
    fontSize: 16,
    fontWeight: '500',
  },
  transactionDate: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  incomeText: {
    fontSize: 16,
    color: '#4caf50',
    fontWeight: 'bold',
  },
  expenseText: {
    fontSize: 16,
    color: '#f44336',
    fontWeight: 'bold',
  },
});

export default TransactionsScreen;

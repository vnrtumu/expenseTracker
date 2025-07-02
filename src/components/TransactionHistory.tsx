import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const transactions = [
  {
    id: '1',
    logo: 'https://cdn.icon-icons.com/icons2/2428/PNG/512/upwork_logo_icon_147244.png',
    name: 'Upwork',
    date: 'Today',
    amount: '+ $850.00',
    type: 'income',
  },
  {
    id: '2',
    logo: 'https://i.pravatar.cc/150?img=1',
    name: 'Transfer',
    date: 'Yesterday',
    amount: '- $85.00',
    type: 'expense',
  },
  {
    id: '3',
    logo: 'https://cdn.icon-icons.com/icons2/730/PNG/512/paypal_icon-icons.com_62738.png',
    name: 'Paypal',
    date: 'Jan 30, 2022',
    amount: '+ $1,406.00',
    type: 'income',
  },
  {
    id: '4',
    logo: 'https://cdn.icon-icons.com/icons2/1211/PNG/512/1491579609-yummie-youtube-logo_83054.png',
    name: 'Youtube',
    date: 'Jan 16, 2022',
    amount: '- $11.99',
    type: 'expense',
  },
];

const TransactionHistory = () => {
  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.logo }} style={styles.logo} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDate}>{item.date}</Text>
      </View>
      <Text style={item.type === 'income' ? styles.amountIncome : styles.amountExpense}>
        {item.amount}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Transactions History</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={transactions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAll: {
    fontSize: 14,
    color: '#3D8B8B',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginRight: 15,
    resizeMode: 'contain',
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  itemDate: {
    fontSize: 12,
    color: '#888',
  },
  amountIncome: {
    fontSize: 16,
    fontWeight: '600',
    color: '#28a745',
  },
  amountExpense: {
    fontSize: 16,
    fontWeight: '600',
    color: '#dc3545',
  },
});

export default TransactionHistory;

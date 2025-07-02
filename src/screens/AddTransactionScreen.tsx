import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';

const AddTransactionScreen = ({ navigation }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense'); // 'expense' or 'income'

  const handleAddTransaction = () => {
    if (!description || !amount) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    // Logic to add the transaction would go here
    console.log({
      description,
      amount: parseFloat(amount),
      type,
    });
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Add Transaction</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.closeButton}>Close</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />
        <TextInput
          style={styles.input}
          placeholder="Amount"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
        />
        <View style={styles.typeSelector}>
          <TouchableOpacity
            style={[
              styles.typeButton,
              type === 'expense' && styles.typeButtonActive,
            ]}
            onPress={() => setType('expense')}
          >
            <Text style={styles.typeButtonText}>Expense</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.typeButton,
              type === 'income' && styles.typeButtonActive,
            ]}
            onPress={() => setType('income')}
          >
            <Text style={styles.typeButtonText}>Income</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddTransaction}
        >
          <Text style={styles.addButtonText}>Add Transaction</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#6200ee',
    padding: 20,
    paddingTop: 40,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeButton: {
    color: '#fff',
    fontSize: 16,
  },
  form: {
    padding: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  typeSelector: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  typeButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#ddd',
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  typeButtonActive: {
    backgroundColor: '#6200ee',
  },
  typeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#6200ee',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddTransactionScreen;

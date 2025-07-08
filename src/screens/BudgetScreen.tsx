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

const BudgetScreen = ({ navigation }: { navigation: any }) => {
  // Mock data for budget categories
  const budgetData = [
    { id: '1', category: 'Groceries', budget: 400, spent: 250 },
    { id: '2', category: 'Dining Out', budget: 200, spent: 150 },
    { id: '3', category: 'Transport', budget: 100, spent: 80 },
    { id: '4', category: 'Shopping', budget: 300, spent: 350 }, // Over budget
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

  const renderBudgetItem = ({ item }: { item: any }) => {
    const remaining = item.budget - item.spent;
    const isOverBudget = remaining < 0;

    return (
      <View style={styles.budgetItem}>
        <Text style={styles.categoryText}>{item.category}</Text>
        <View style={styles.budgetDetails}>
          <Text>Spent: ${item.spent.toFixed(2)}</Text>
          <Text>Budget: ${item.budget.toFixed(2)}</Text>
        </View>
        <View style={styles.progressBarBackground}>
          <View
            style={[
              styles.progressBar,
              {
                width: `${Math.min((item.spent / item.budget) * 100, 100)}%`,
                backgroundColor: isOverBudget ? '#f44336' : '#4caf50',
              },
            ]}
          />
        </View>
        <Text
          style={isOverBudget ? styles.overBudgetText : styles.remainingText}
        >
          {isOverBudget
            ? `Over by $${Math.abs(remaining).toFixed(2)}`
            : `Remaining: $${remaining.toFixed(2)}`}
        </Text>
      </View>
    );
  };

  return (
    <Animated.View style={{ flex: 1, opacity: anim, transform: [{ translateY }] }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Budget Tracker</Text>
        </View>
        <FlatList
          data={budgetData}
          renderItem={renderBudgetItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.budgetList}
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
    padding: 20,
    paddingTop: 40,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  budgetList: {
    padding: 20,
  },
  budgetItem: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  budgetDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  progressBarBackground: {
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginBottom: 5,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
  },
  remainingText: {
    textAlign: 'right',
    color: '#666',
  },
  overBudgetText: {
    textAlign: 'right',
    color: '#f44336',
    fontWeight: 'bold',
  },
});

export default BudgetScreen;

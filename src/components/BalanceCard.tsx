import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { normalize } from '../utils/scaling';

const BalanceCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Text style={styles.balanceLabel}>Total Balance</Text>
        <TouchableOpacity>
          <Icon name="more-horizontal" size={normalize(24)} color="#fff" />
        </TouchableOpacity>
      </View>
      <Text style={styles.balanceAmount}>$2,548.00</Text>
      <View style={styles.footerRow}>
        <View style={styles.incomeExpenseContainer}>
          <View style={styles.iconContainerGreen}>
            <Icon name="arrow-down" size={normalize(16)} color="#fff" />
          </View>
          <View>
            <Text style={styles.incomeExpenseLabel}>Income</Text>
            <Text style={styles.incomeExpenseAmount}>$1,840.00</Text>
          </View>
        </View>
        <View style={styles.incomeExpenseContainer}>
          <View style={styles.iconContainerRed}>
            <Icon name="arrow-up" size={normalize(16)} color="#fff" />
          </View>
          <View>
            <Text style={styles.incomeExpenseLabel}>Expenses</Text>
            <Text style={styles.incomeExpenseAmount}>$284.00</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3D8B8B',
    padding: normalize(20),
    borderRadius: normalize(30),
    marginHorizontal: normalize(20),
    marginTop: normalize(20),
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  balanceLabel: {
    color: '#fff',
    fontSize: normalize(16),
  },
  balanceAmount: {
    color: '#fff',
    fontSize: normalize(36),
    fontWeight: 'bold',
    marginTop: normalize(10),
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: normalize(20),
  },
  incomeExpenseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainerGreen: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: normalize(8),
    borderRadius: normalize(16),
    marginRight: normalize(10),
  },
  iconContainerRed: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: normalize(8),
    borderRadius: normalize(16),
    marginRight: normalize(10),
  },
  incomeExpenseLabel: {
    color: '#fff',
    fontSize: normalize(14),
  },
  incomeExpenseAmount: {
    color: '#fff',
    fontSize: normalize(18),
    fontWeight: '600',
  },
});

export default BalanceCard;

import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { normalize } from '../utils/scaling';
import Header from '../components/Header';
import BalanceCard from '../components/BalanceCard';
import TransactionHistory from '../components/TransactionHistory';
import SendAgain from '../components/SendAgain';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Header />
          <BalanceCard />
        </View>
        <View style={styles.bodyContainer}>
          <TransactionHistory />
          <SendAgain />
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('AddTransaction')}>
        <Icon name="plus" size={normalize(36)} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: normalize(30),
    alignSelf: 'center',
    backgroundColor: '#3D8B8B',
    width: normalize(70),
    height: normalize(70),
    borderRadius: normalize(35),
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: normalize(4),
    elevation: 8,
    zIndex: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  headerContainer: {
    backgroundColor: '#3D8B8B',
    paddingBottom: normalize(40),
    borderBottomLeftRadius: normalize(40),
    borderBottomRightRadius: normalize(40),
  },
  bodyContainer: {
    marginTop: normalize(-20), // Overlap the header slightly
  },

});

export default HomeScreen;

import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
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
        <Icon name="plus" size={36} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    backgroundColor: '#3D8B8B',
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
    zIndex: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  headerContainer: {
    backgroundColor: '#3D8B8B',
    paddingBottom: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  bodyContainer: {
    marginTop: -20, // Overlap the header slightly
  },

});

export default HomeScreen;

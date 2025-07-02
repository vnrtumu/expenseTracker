import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Good afternoon,</Text>
        <Text style={styles.userName}>Enjelin Morgeana</Text>
      </View>
      <TouchableOpacity style={styles.bellContainer}>
        <Icon name="bell" size={24} color="#fff" />
        <View style={styles.notificationDot} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    color: '#fff',
    fontSize: 16,
  },
  userName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bellContainer: {
    position: 'relative',
  },
  notificationDot: {
    position: 'absolute',
    top: 2,
    right: 2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF6347',
  },
});

export default Header;

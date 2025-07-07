import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { normalize } from '../utils/scaling';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Good afternoon,</Text>
        <Text style={styles.userName}>Enjelin Morgeana</Text>
      </View>
      <TouchableOpacity style={styles.bellContainer}>
        <Icon name="bell" size={normalize(24)} color="#fff" />
        <View style={styles.notificationDot} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: normalize(50),
    paddingHorizontal: normalize(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    color: '#fff',
    fontSize: normalize(16),
  },
  userName: {
    color: '#fff',
    fontSize: normalize(20),
    fontWeight: 'bold',
  },
  bellContainer: {
    position: 'relative',
  },
  notificationDot: {
    position: 'absolute',
    top: normalize(2),
    right: normalize(2),
    width: normalize(8),
    height: normalize(8),
    borderRadius: normalize(4),
    backgroundColor: '#FF6347',
  },
});

export default Header;

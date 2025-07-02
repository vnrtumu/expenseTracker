import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const contacts = [
  { id: '1', name: 'Anna', avatar: 'https://i.pravatar.cc/150?img=1' },
  { id: '2', name: 'David', avatar: 'https://i.pravatar.cc/150?img=2' },
  { id: '3', name: 'John', avatar: 'https://i.pravatar.cc/150?img=3' },
  { id: '4', name: 'Maria', avatar: 'https://i.pravatar.cc/150?img=4' },
  { id: '5', name: 'Chris', avatar: 'https://i.pravatar.cc/150?img=5' },
];

const SendAgain = () => {
  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.contactContainer}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Send Again</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contactsList}>
        <TouchableOpacity style={styles.addButton}>
          <Icon name="plus" size={24} color="#3D8B8B" />
        </TouchableOpacity>
        <FlatList
          data={contacts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
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
  contactsList: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e0f2f1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  contactContainer: {
    marginRight: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default SendAgain;

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const ProfileScreen = ({ navigation }: { navigation: any }) => {
  const user = {
    name: 'Enjelin Morgeana',
    username: '@enjelin_morgeana',
    avatar: 'https://i.pravatar.cc/150?img=27', // Placeholder avatar
  };

  const menuItems = [
    { icon: 'gift', name: 'Invite Friends' },
    { icon: 'user', name: 'Account info' },
    { icon: 'users', name: 'Personal profile' },
    { icon: 'mail', name: 'Message center' },
    { icon: 'shield', name: 'Login and security' },
    { icon: 'lock', name: 'Data and privacy' },
  ];

  const renderMenuItem = (item: any) => (
    <TouchableOpacity key={item.name} style={styles.menuItem}>
      <View style={styles.menuIconContainer}>
        <Icon name={item.icon} size={20} color="#3D8B8B" />
      </View>
      <Text style={styles.menuItemText}>{item.name}</Text>
      <Icon name="chevron-right" size={22} color="#ccc" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.headerButton}
          >
            <Icon name="chevron-left" size={28} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity style={styles.headerButton}>
            <Icon name="bell" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.profileSection}>
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userUsername}>{user.username}</Text>
        </View>

        <View style={styles.menuContainer}>
          {menuItems.map(renderMenuItem)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  header: {
    backgroundColor: '#3D8B8B',
    height: 220,
    paddingTop: 50,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerButton: {
    padding: 5,
  },
  profileSection: {
    alignItems: 'center',
    marginTop: -75,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#fff',
  },
  userName: {
    marginTop: 15,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  userUsername: {
    marginTop: 5,
    fontSize: 16,
    color: '#3D8B8B',
  },
  menuContainer: {
    marginTop: 20,
    paddingHorizontal: 30,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  menuItemText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
});

export default ProfileScreen;

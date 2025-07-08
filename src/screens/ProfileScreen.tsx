import React, { useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { normalize } from '../utils/scaling';

const ProfileScreen = ({ navigation }: { navigation: any }) => {
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
    <TouchableOpacity
      key={item.name}
      style={styles.menuItem}
      onPress={() => {
        if (item.name === 'Invite Friends') {
          navigation.navigate('VirtualizedList');
        } else if (item.name === 'Account info') {
          navigation.navigate('DragAndDrop');
        }
      }}
    >
      <View style={styles.menuIconContainer}>
        <Icon name={item.icon} size={normalize(20)} color="#3D8B8B" />
      </View>
      <Text style={styles.menuItemText}>{item.name}</Text>
      <Icon name="chevron-right" size={normalize(22)} color="#ccc" />
    </TouchableOpacity>
  );

  return (
    <Animated.View style={{ flex: 1, opacity: anim, transform: [{ translateY }] }}>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.headerButton}
            >
              <Icon name="chevron-left" size={normalize(28)} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Profile</Text>
            <TouchableOpacity style={styles.headerButton}>
              <Icon name="bell" size={normalize(24)} color="#fff" />
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
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  header: {
    backgroundColor: '#3D8B8B',
    height: normalize(220),
    paddingTop: normalize(50),
    paddingHorizontal: normalize(20),
    borderBottomLeftRadius: normalize(40),
    borderBottomRightRadius: normalize(40),
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: '#fff',
    fontSize: normalize(20),
    fontWeight: 'bold',
  },
  headerButton: {
    padding: normalize(5),
  },
  profileSection: {
    alignItems: 'center',
    marginTop: normalize(-75),
  },
  avatar: {
    width: normalize(120),
    height: normalize(120),
    borderRadius: normalize(60),
    borderWidth: normalize(4),
    borderColor: '#fff',
  },
  userName: {
    marginTop: normalize(15),
    fontSize: normalize(22),
    fontWeight: 'bold',
    color: '#333',
  },
  userUsername: {
    marginTop: normalize(5),
    fontSize: normalize(16),
    color: '#3D8B8B',
  },
  menuContainer: {
    marginTop: normalize(20),
    paddingHorizontal: normalize(30),
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: normalize(15),
  },
  menuIconContainer: {
    width: normalize(40),
    height: normalize(40),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: normalize(15),
  },
  menuItemText: {
    flex: 1,
    fontSize: normalize(16),
    color: '#333',
    fontWeight: '500',
  },
});

export default ProfileScreen;

import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {
  Agenda,
  AgendaEntry,
  AgendaSchedule,
  DateData,
} from 'react-native-calendars';
import event from '../assets/data/event.json';
import users from '../assets/data/users.json';
import { useRoute } from '@react-navigation/native';
import { Text, View } from '../components/Themed';
import CustomButton from '../components/CustomButton';

export default function ModalScreen() {
  const route = useRoute();
  const { id } = route.params;
  const displayUsers = users.slice(0, 5);
  const onJoin = () => {};
  return (
    <View style={styles.container}>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <Text style={styles.title}>{event.name}</Text>
      <Text style={styles.date}>
        <AntDesign name="calendar" size={16} color="black" />{' '}
        {new Date(event.date).toDateString()}
      </Text>
      <View style={styles.footer}>
        <View style={styles.users}>
          {displayUsers.map(user => (
            <Image
              key={user.id}
              source={{ uri: user.avatarUrl }}
              style={styles.user}
            />
          ))}
          <View style={styles.userAvatar}>
            <Text>+{users.length - displayUsers.length}</Text>
          </View>
        </View>
        <CustomButton text="Join to evet" onPress={onJoin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  date: {
    fontSize: 18,
    color: '#666',
  },
  footer: {
    marginTop: 'auto',
  },
  users: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  user: {
    width: 50,
    height: 50,
    marginRight: -20,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
});

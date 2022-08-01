import { Text, View } from 'react-native';
import { styles } from './styles';

const Home = () => {
  const eventName = 'Event Name'
  const eventDate = new Date().toDateString()
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>{eventName}</Text>
      <Text style={styles.eventDate}>{eventDate}</Text>
    </View>
  );
};

export default Home;
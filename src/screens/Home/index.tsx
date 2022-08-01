import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';

const Home = () => {
  const eventName = 'Event Name'
  const eventDate = new Date().toDateString()
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>{eventName}</Text>
      <Text style={styles.eventDate}>{eventDate}</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Participant name"
        placeholderTextColor={'#6b6b6b'}
        autoCapitalize='words'
        maxLength={50}
        autoCorrect={false}
        autoComplete={'off'}
      />
    </View>
  );
};

export default Home;
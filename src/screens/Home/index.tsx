import { useCallback, useState } from 'react';
import { Alert, FlatList, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import Participant from '../../components/Participant';
import { styles } from './styles';

const Home = () => {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  const eventName = 'Event Name'
  const eventDate = new Date().toDateString()


  const handleAddParticipant = useCallback(
    () => {
      const trimmedParticipantName = participantName.trim()
      const isUserAlreadyAParticipant = participants.includes(trimmedParticipantName)
      if (isUserAlreadyAParticipant) {
        const alertTitle = 'Error'
        const alertMessage = 'User is already on the list.'
        Alert.alert(alertTitle, alertMessage)
        return
      }

      setParticipants(prevState => [...prevState, trimmedParticipantName])
      setParticipantName('')
    },
    [participantName],
  )

  const handleRemoveParticipant = useCallback(
    (name: string) => {
      const alertTitle = 'Remove'
      const alertMessage = `Are you sure you want to remove ${name} from the participants?`
      Alert.alert(alertTitle, alertMessage, [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => Alert.alert(`Removed ${name}`)
        }
      ])

      console.log('pressed to remove participant: ', name);
    },
    [],
  )

  const renderItem = ({ item }: { item: string }) => {
    return (
      <Participant 
        name={item} 
        onRemovePress={handleRemoveParticipant} 
      />
    )
  }

  const renderEmptyComponent = () => {
    return (
      <Text style={styles.listEmptyText}>No participants were added yet. Add a new participant to your list!</Text>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>{eventName}</Text>
      <Text style={styles.eventDate}>{eventDate}</Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder="Participant name"
          placeholderTextColor={'#6b6b6b'}
          autoCapitalize='words'
          maxLength={50}
          autoCorrect={false}
          autoComplete={'off'}
          onChangeText={setParticipantName}
          value={participantName}
          returnKeyType="done"
          onSubmitEditing={handleAddParticipant}
        />

        <Pressable style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmptyComponent}
        bounces={false}
      />
    </View>
  );
};

export default Home;
import { useCallback, useState } from 'react';
import { Alert, FlatList, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import Participant from '../../components/Participant';
import { styles } from './styles';

const Home = () => {
  const eventName = 'Event Name'
  const eventDate = new Date().toDateString()
  const participants = ['Jane Doe', 'John Doe', 'Bob', 'Robson', 
  'Jane Doe 2', 'John Doe 2', 'Bob 2', 'Robson 2', 
  'Jane Doe 3', 'John Doe 3', 'Bob 3', 'Robson 3',
  'Jane Doe 4', 'John Doe 4', 'Bob 4', 'Robson 4',
  'Jane Doe 5', 'John Doe 5', 'Bob 5', 'Robson 5']

  const handleAddParticipant = useCallback(
    () => {
      const isUserAlreadyAParticipant = participants.includes('Bob')
      if (isUserAlreadyAParticipant) {
        const alertTitle = 'Error'
        const alertMessage = 'User is already on the list.'
        Alert.alert(alertTitle, alertMessage)
        return
      }

      console.log('pressed to add new participant');
    },
    [],
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
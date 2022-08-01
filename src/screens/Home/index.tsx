import { useCallback, useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import Participant from '../../components/Participant';
import { styles } from './styles';

const Home = () => {
  const eventName = 'Event Name'
  const eventDate = new Date().toDateString()
  const participants = ['Jane Doe', 'John Doe', 'Bob', 'Robson', 
  'Jane Doe 2', 'John Doe 2', 'Bob 2', 'Robson 2', 
  'Jane Doe 3', 'John Doe 3', 'Bob 3', 'Robson 3']

  const handleAddParticipant = useCallback(
    () => {
      console.log('pressed to add new participant');
    },
    [],
  )

  const handleRemoveParticipant = useCallback(
    (name: string) => {
      console.log('pressed to remove participant: ', name);
    },
    [],
  )

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

      <ScrollView showsVerticalScrollIndicator={false}>        
        {
          participants.map(participant => {
            return (
              <Participant 
                key={participant} 
                name={participant} 
                onRemovePress={handleRemoveParticipant} 
              />
            )
          })
        }
      </ScrollView>
    </View>
  );
};

export default Home;
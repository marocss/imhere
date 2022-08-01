import { useCallback, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import Participant from '../../components/Participant';
import { styles } from './styles';

const Home = () => {
  const eventName = 'Event Name'
  const eventDate = new Date().toDateString()

  const handleAddParticipant = () => {
    console.log('pressed to add new participant');
  }

  const handleRemoveParticipant = useCallback(
    (name: string) => {
      console.log('pressed to remove participant: ', name);
    },
    [],
  )
  
  // const handleRemoveParticipant = (name: string) => {
  //   console.log('pressed to remove participant: ', name);
  // }

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

      <Participant name='Jane Doe' onRemovePress={handleRemoveParticipant} />
      <Participant name='John Doe' onRemovePress={handleRemoveParticipant} />
      <Participant name='Jane Doe' onRemovePress={handleRemoveParticipant} />
      <Participant name='John Doe' onRemovePress={handleRemoveParticipant} />
    </View>
  );
};

export default Home;
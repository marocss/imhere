import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';

const Participant = () => {
  const participantName = 'Jane Doe'
  const handleRemoveParticipant = () => {
    console.log('pressed to remove participant');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{participantName}</Text>

      <Pressable style={styles.button} onPress={handleRemoveParticipant}>
        <Text style={styles.buttonText}>-</Text>
      </Pressable>
    </View>
  );
};

export default Participant;

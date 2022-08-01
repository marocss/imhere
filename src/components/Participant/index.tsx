import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';

type Props = {
  name: string;
}
const Participant = ({ name }: Props) => {
  const handleRemoveParticipant = () => {
    console.log('pressed to remove participant');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <Pressable style={styles.button} onPress={handleRemoveParticipant}>
        <Text style={styles.buttonText}>-</Text>
      </Pressable>
    </View>
  );
};

export default Participant;

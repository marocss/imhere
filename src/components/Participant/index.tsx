import { memo } from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';

type Props = {
  name: string;
  onRemovePress: (name: string) => void;
}

const Participant = ({ name, onRemovePress }: Props) => {
  console.log('ren participant');
  
  const handleRemoveButtonPress = () => {
    onRemovePress(name)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <Pressable style={styles.button} onPress={handleRemoveButtonPress}>
        <Text style={styles.buttonText}>-</Text>
      </Pressable>
    </View>
  );
};

// export default memo(Participant, (prevProps, nextProps) => {
//   return prevProps.name === nextProps.name
// });
export default memo(Participant);
// export default Participant

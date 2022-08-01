import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';

type Props = {
  name: string;
  onRemovePress: (name: string) => void;
}

const Participant = ({ name, onRemovePress }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <Pressable style={styles.button} onPress={() => onRemovePress(name)}>
        <Text style={styles.buttonText}>-</Text>
      </Pressable>
    </View>
  );
};

export default Participant;

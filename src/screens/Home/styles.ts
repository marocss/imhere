import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },
  eventName: {
    color: '#fdfcfe',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6b6b6b',
    fontSize: 16
  },
  input: {
    backgroundColor: '#1f1e25',
    height: 56,
    borderRadius: 4,
    color: '#fff',
    fontSize: 16,
    padding: 16,
    marginTop: 8
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 4,
    backgroundColor: '#31cf67',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 24
  }
});

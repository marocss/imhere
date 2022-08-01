import { StatusBar } from 'expo-status-bar';
import Home from './src/screens/Home';

const App = () => {
  return (
    <>
      <Home />
      <StatusBar style="light" translucent />
    </>
  );
}

export default App;
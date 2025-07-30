import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
import AppNavigator from './navigation/AppNavigator';

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

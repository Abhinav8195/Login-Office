import { Text, View } from 'react-native';
import Login from '../components/Login';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Index() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <Login />
      </View>
    </GestureHandlerRootView>
  );
}

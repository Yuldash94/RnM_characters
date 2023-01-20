import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './components/Main'
import Photo from './components/Photo'


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="News" component={Main} options={{title: "Rick and Morty characters"}}/>
        <Stack.Screen name="Article" component={Photo} options={{title: "Character"}}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}


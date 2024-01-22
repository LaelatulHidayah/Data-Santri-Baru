import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import DataSantri from './components/DataSantri';
import InputSantriBaru from './components/InputSantriBaru';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#66CDAA',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" size={20} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Input Santri Baru"
          component={InputSantriBaru}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person-add" size={20} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Data Santri"
          component={DataSantri}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="list" size={20} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

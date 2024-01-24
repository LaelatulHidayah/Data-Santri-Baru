import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home.js';
import DataSantri from './components/DataSantri';
import InputSantriBaru from './components/InputSantriBaru';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';


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
            headerRight: () => (
              <Image
                source={require('/assets/IMG-20210601-WA0027__1_-removebg-preview.png')} // Sesuaikan path gambar
                style={{ width: 130, height: 50, marginRight: 590, marginBottom:10 }} // Sesuaikan ukuran dan margin
              />
            ),
            headerTitle: '',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" size={20} color="#F45C5C" />
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

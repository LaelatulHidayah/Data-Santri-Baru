import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DataSantri from './components/Data Santri';
import InputSantriBaru from './components/Input Santri Baru';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName=" Input Data Santri"
         screenOptions={{
          headerStyle: {
            backgroundColor: '#66CDAA', // Warna latar belakang header
          },
          headerTintColor: '#fff', // Warna teks untuk tombol back dan title
          headerTitleStyle: {
            fontWeight: 'bold', // Style untuk judul teks
          },
        }}
        >
        <Drawer.Screen name="Input Santri Baru" component={InputSantriBaru} />
        <Drawer.Screen name="Data Santri" component={DataSantri}  />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


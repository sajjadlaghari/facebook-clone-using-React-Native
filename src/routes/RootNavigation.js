import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../screens/LoginPage/LoginPage';
import HomeScreen from '../screens/HomeScreen/HomeScreen'

const Stack = createStackNavigator();

const RootNavigation  = () =>  {
    return (
        <NavigationContainer>{/* Rest of your app code */}
            <Stack.Navigator
             screenOptions={{
                headerShown: false
              }}
            >
                <Stack.Screen name="LoginPage" component={LoginPage} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default RootNavigation;
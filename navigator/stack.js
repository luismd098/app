import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './stackRoutes';
const Stack = createStackNavigator();

function AppStack(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name="Home"
                    component={Routes.Login}
                    options={{
                        headerShown: false
                    }} /> */}
                <Stack.Screen name="Menu" component={Routes.Menu} {...props}
                    options={{
                        headerShown: false
                    }} />
                <Stack.Screen name="Recolecciones" component={Routes.Recolecciones}
                    options={{
                        headerShown: false
                    }} />
                <Stack.Screen name="Ordinario" component={Routes.Ordinario}
                    options={{
                        headerShown: false
                    }} />
                <Stack.Screen name="Entrega" component={Routes.Entrega} {...props}
                    options={{
                        headerShown: true
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppStack;
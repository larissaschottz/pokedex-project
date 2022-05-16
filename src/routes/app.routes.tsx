import React from "react";
//stack navigation serve para editar as transições entre telas
import {createStackNavigator} from '@react-navigation/stack';

import {Welcome} from '../pages/welcome';

const Stack = createStackNavigator();

//importando var com declaracao export

export function AppRoutes() {
return (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name='Welcome' component={Welcome}/>
    </Stack.Navigator>
);
}
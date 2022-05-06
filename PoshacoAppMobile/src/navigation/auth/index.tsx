import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREENS } from '../screenTypes';
import { screenOptions } from '@src/utils';
import { Auth } from '@src/screen';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName={SCREENS.BOTTOM_TAB} screenOptions={screenOptions}>
            <Stack.Screen name={SCREENS.LOGIN_SCREEN} component={Auth.LoginScreen.MainAuth} />
        </Stack.Navigator>
    );
};

export default AuthStack;

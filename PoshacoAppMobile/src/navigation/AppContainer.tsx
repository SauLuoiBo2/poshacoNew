import { View, Text } from 'react-native';
import React from 'react';
import { Main } from '@src/screen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SCREENS } from './screenTypes';
import { screenOptions } from '@src/utils';
import MainStack from './main';

const Root = createStackNavigator();

const AppContainer = () => {
    return (
        <NavigationContainer fallback={<Text>Loading ...</Text>}>
            <Root.Navigator screenOptions={screenOptions}>
                <Root.Screen name={SCREENS.MAIN_STACK} component={MainStack} />
            </Root.Navigator>
        </NavigationContainer>
    );
};

export default AppContainer;

import { View, Text } from 'react-native';
import React from 'react';
import { Main } from '@src/screen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SCREENS } from './screenTypes';
import { screenOptions } from '@src/utils';
import MainStack from './main';
import AuthStack from './auth';
import { useAuth } from '@src/queries/hooks';

const Root = createStackNavigator();

const AppContainer = () => {
    const { getAuth } = useAuth();
    const { data } = getAuth();
    return (
        <NavigationContainer fallback={<Text>Loading ...</Text>}>
            <Root.Navigator screenOptions={screenOptions}>
                {data?.token ? (
                    <Root.Screen name={SCREENS.MAIN_STACK} component={MainStack} />
                ) : (
                    <Root.Screen name={SCREENS.AUTH_STACK} component={AuthStack} />
                )}
                {/* <Root.Screen name={SCREENS.AUTH_STACK} component={AuthStack} /> */}
            </Root.Navigator>
        </NavigationContainer>
    );
};

export default AppContainer;

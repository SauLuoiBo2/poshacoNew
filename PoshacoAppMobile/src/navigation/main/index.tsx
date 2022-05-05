import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREENS } from '../screenTypes';
import { screenOptions } from '@src/utils';
import BottomTab from './BottomTab';
import * as ScreenMain from '@src/screen/main';

const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName={SCREENS.BOTTOM_TAB} screenOptions={screenOptions}>
            <Stack.Screen name={SCREENS.BOTTOM_TAB} component={BottomTab} />

            {/* PRODUCT */}
            <Stack.Screen
                name={SCREENS.PRODUCT_DETAIL_SCREEN}
                component={ScreenMain.ProductDetailScreen.ProductDetailScreen}
            />
            <Stack.Screen
                name={SCREENS.PRODUCT_CATEGORY_SCREEN}
                component={ScreenMain.ProductScreen.ProductCategoryScreen}
            />
            <Stack.Screen
                name={SCREENS.PRODUCT_CALCULATE_SCREEN}
                component={ScreenMain.ProductScreen.ProductHomeScreen}
            />
            {/* PERSONAL */}
            <Stack.Screen
                name={SCREENS.PERSONAL_INFO_SCREEN}
                component={ScreenMain.PersonalScreen.PersonalInforScreen}
            />
            <Stack.Screen
                name={SCREENS.PERSONAL_INFO_EDIT_SCREEN}
                component={ScreenMain.PersonalScreen.PersonalInfoEditScreen}
            />
            <Stack.Screen name={SCREENS.PERSONAL_ABOUT_US_SCREEN} component={ScreenMain.PersonalScreen.AboutUsScreen} />
            <Stack.Screen
                name={SCREENS.PERSONAL_SUPPORT_SCREEN}
                component={ScreenMain.PersonalScreen.PersonalSupportScreen}
            />
            <Stack.Screen
                name={SCREENS.PERSONAL_MESSAGE_SCREEN}
                component={ScreenMain.PersonalScreen.PersonalMessageScreen}
            />
            <Stack.Screen
                name={SCREENS.PERSONAL_LIABILITIES_SCREEN}
                component={ScreenMain.PersonalScreen.PersonalInforScreen}
            />

            {/* Notification*/}
            <Stack.Screen name={SCREENS.NOTIFICATION_SCREEN} component={ScreenMain.NotificationScreen.Notification} />
            <Stack.Screen
                name={SCREENS.NOTIFICATION_DETAIL_SCREEN}
                component={ScreenMain.NotificationScreen.Notification}
            />
        </Stack.Navigator>
    );
};

export default MainStack;

import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { themes } from '@src/utils';
import { SCREENS } from '@src/navigation';
import TabBarCustom from './CustomTabBar';
// import * as Screen from '@src/screen';
import * as ScreenMain from '@src/screen/main';
const Tab = createBottomTabNavigator();
const BottomTab = () => {
    return (
        <Tab.Navigator
            initialRouteName={SCREENS.HOME_TAB}
            screenOptions={{
                tabBarStyle: { height: 90, paddingTop: 16 },
                tabBarInactiveTintColor: themes.colors.dark[400],
                tabBarActiveTintColor: themes.colors.primary[700],
                headerShown: false,
            }}
            tabBar={(props) => <TabBarCustom {...props} />}
        >
            <Tab.Screen
                name={SCREENS.HOME_TAB}
                component={ScreenMain.HomeScreen.Home}
                options={() => ({
                    tabBarLabel: 'Trang chủ',
                    iconActive: 'home',
                    iconDeactivate: 'home-fill',
                })}
            />
            <Tab.Screen
                name={SCREENS.ORDER_TAB}
                component={ScreenMain.HomeScreen.Home}
                options={() => ({
                    tabBarLabel: 'Đơn hàng',
                    iconActive: 'order',
                    iconDeactivate: 'order-fill',
                })}
            />
            <Tab.Screen
                name={SCREENS.CREATE_ORDER_TAB}
                component={ScreenMain.HomeScreen.Home}
                options={() => ({
                    tabBarLabel: 'Tạo đơn',
                    iconActive: 'home',
                    iconDeactivate: 'home-fill',
                })}
            />
            <Tab.Screen
                name={SCREENS.PRODUCT_TAB}
                component={ScreenMain.ProductScreen.ProductHomeScreen}
                options={() => ({
                    tabBarLabel: 'Sản phẩm',
                    iconActive: 'shop',
                    iconDeactivate: 'shop-fill',
                })}
            />
            <Tab.Screen
                name={SCREENS.PERSONAL_TAB}
                component={ScreenMain.PersonalScreen.PersonalHomeScreen}
                options={() => ({
                    tabBarLabel: 'Cá nhân',
                    iconActive: 'profile',
                    iconDeactivate: 'profile-fill',
                })}
            />
        </Tab.Navigator>
    );
};

export default BottomTab;

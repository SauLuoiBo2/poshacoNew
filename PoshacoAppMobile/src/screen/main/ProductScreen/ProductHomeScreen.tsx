import { StyleSheet } from 'react-native';
import React from 'react';
import * as Nb from 'native-base';
import { themes } from '@src/utils';
import { StatusBar } from 'native-base';
import { scale, vScale } from '@src/lib';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import { CategoryTitle } from '@src/components/Title';
import { ProductList } from './components';
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from '@src/components/Input';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const ProductHomeScreen = () => {
    const { colors, fonts } = themes;
    const navigation = useNavigation();
    return (
        <Nb.Box safeAreaTop flex={1} bg={colors.white} pb={0}>
            <StatusBar barStyle='dark-content' backgroundColor={colors.white} />
            <Nb.Text pl={`${scale(16)}px`} color={colors.dark} fontSize='20px' mt='12px' mb='8px' fontWeight='bold'>
                Sản phẩm
            </Nb.Text>
            <Nb.Box px='16px'>
                <SearchBar />
            </Nb.Box>
            {/* <Tab.Navigator
                initialRouteName='1'
                screenOptions={{
                    tabBarActiveTintColor: '#e91e63',
                    tabBarLabelStyle: { fontSize: 12 },
                    tabBarStyle: { backgroundColor: 'powderblue' },
                }}
            >
                <Tab.Screen name='1' component={ProductList} options={{ tabBarLabel: 'Tất cả' }}></Tab.Screen>
                <Tab.Screen name='2' component={ProductList} options={{ tabBarLabel: 'Tôn' }}></Tab.Screen>
                <Tab.Screen name='3' component={ProductList} options={{ tabBarLabel: 'Tôn trần' }}></Tab.Screen>
                <Tab.Screen name='4' component={ProductList} options={{ tabBarLabel: 'Xà gồ' }}></Tab.Screen>
                <Tab.Screen name='5' component={ProductList} options={{ tabBarLabel: 'Phụ kiện' }}></Tab.Screen>
            </Tab.Navigator> */}
            <ScrollableTabView
                style={styles.tabsContainer}
                tabBarTextStyle={styles.tabBarTextStyle}
                tabBarInactiveTextColor={colors.darkNeu}
                tabBarActiveTextColor={colors.blue}
                tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
                renderTabBar={() => <ScrollableTabBar />}
            >
                <ProductList tabLabel='Tất cả' navigation={navigation} />
                <ProductList tabLabel='Tôn' navigation={navigation} />
                <ProductList tabLabel='Tôn trần' navigation={navigation} />
                <ProductList tabLabel='Xà gồ' navigation={navigation} />
                <ProductList tabLabel='Phụ kiện' navigation={navigation} />
            </ScrollableTabView>
        </Nb.Box>
    );
};

export default ProductHomeScreen;

const styles = StyleSheet.create({
    // headercontainer: {
    //     borderBottomWidth: 0,
    // },
    tabsContainer: {
        paddingVertical: vScale(6),
        borderBottomWidth: vScale(1),
        borderBottomColor: themes.colors.light,
    },
    tabBarTextStyle: {
        fontSize: 16,
        fontFamily: themes.fonts.hBold,
        paddingBottom: vScale(7),
    },
    tabBarUnderlineStyle: {
        backgroundColor: themes.colors.blue,
        height: vScale(3),
    },
});

import { StatusBar } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import isEqual from 'react-fast-compare';
import { Box, ScrollView, useTheme } from 'native-base';
import { themes } from '@src/utils';
import { useNavigation } from '@react-navigation/native';
import * as Co from './components';
import * as Sui from '@src/components';
import { SCREENS } from '@src/navigation';

const PersonalHomeScreen = () => {
    const [bgColor, setBgColor] = useState(themes.colors.white);
    const [barStyle, setBarStyle] = useState<any>('light-content');

    // funcition

    const onLogout = () => modal.current.show();

    // hook
    const navigation = useNavigation();

    const modal: any = useRef();

    // life circle
    useEffect(() => {
        navigation.addListener('focus', () => {
            setBgColor(themes.colors.blue);
            setBarStyle('light-content');
        });
        navigation.addListener('blur', () => {
            setBgColor(themes.colors.white);
            setBarStyle('dark-content');
        });
    }, []);
    return (
        <Box flex={1} bg={themes.colors.white}>
            <StatusBar backgroundColor={bgColor} barStyle={barStyle} />
            <ScrollView bg={themes.colors.white} flex={1} showsVerticalScrollIndicator={false}>
                <Co.Header colors={themes.colors} fonts={themes.fonts} />
                <Box px='16px' py='32px'>
                    <Sui.Card.DebtCard onPress={() => navigation.navigate(SCREENS.PERSONAL_LIABILITIES_SCREEN)} />
                    <Co.ListMenu mt='32px' navigation={navigation} onLogout={onLogout} />
                </Box>
                <Sui.Popup.Confirm
                    ref={modal}
                    typePopup='warn'
                    titlePopup='Đăng xuất'
                    description='Bạn có chắc chắn muốn đăng xuất khỏi hệ thống?'
                    // onPressLeft={logout}
                    onPressRight={() => modal.current.hide()}
                />
            </ScrollView>
        </Box>
    );
};

export default PersonalHomeScreen;

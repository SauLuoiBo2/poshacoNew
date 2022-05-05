import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import isEqual from 'react-fast-compare';
import { Box, Button, ScrollView } from 'native-base';
import { Header } from '@src/components';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '@src/navigation';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import IntroScreen from './IntroScreen';
import PhoneScreen from './PhoneScreen';
import OtpScreen from './OtpScreen';

const MainAuthCom = () => {
    const navigation: any = useNavigation();
    const [indexSwiper, setIndexSwiper] = React.useState<any>(0);
    const [loading, setLoading] = React.useState<boolean>(false);
    const phone = React.useRef();

    const onNext = () => {
        if (indexSwiper >= 0 && indexSwiper < 2) {
            setIndexSwiper(indexSwiper + 1);
        }
    };

    const onBack = () => {
        if (indexSwiper <= 2 && indexSwiper > 0) {
            setIndexSwiper(indexSwiper - 1);
        }
    };

    return (
        <Box safeArea h='100%' px='28px' pt={1} _dark={{ bg: 'warmGray.900' }} _light={{ bg: 'white' }}>
            <Header.HeaderBar
                returnNull
                nameIconRight='support'
                nameIconLeft={indexSwiper > 0 ? 'back' : null}
                navigation={navigation}
                onPressLeft={onBack}
            />
        </Box>
    );
};
export const MainAuth = React.memo(MainAuthCom, (prevProps, nextProps) => isEqual(prevProps, nextProps));

const styles = StyleSheet.create({});

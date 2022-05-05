import { Box, Text, ScrollView } from 'native-base';
import React from 'react';
import { HeaderBar } from '@src/components/Header';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '@src/navigation';
import { scale } from '@src/lib';
import { formatPhoneNumber, themes } from '@src/utils';
import isEqual from 'react-fast-compare';
import * as Co from './components';
import * as Sui from '@src/components';

const PersonalInforComponent = () => {
    // data
    const userData = {
        name: 'Nguyễn Văn Vui',
        address: '18b Láng Hạ, Đống Đa',
        phone: '+84973821099',
        avatar: 'https://picsum.photos/80',
    };

    // hook
    const navigation = useNavigation();

    return (
        <Box safeArea px={`${scale(16)}px`} bg={themes.colors.white} h='100%'>
            <HeaderBar
                nameIconRight='pencil'
                navigation={navigation}
                onPressRight={() => navigation.navigate(SCREENS.PERSONAL_INFO_EDIT_SCREEN, { ...userData })}
            />
            <ScrollView mt='10px'>
                <Co.Avatar
                    title='Đại lý cường vui'
                    catName='Đại lý'
                    avatarURL={userData.avatar}
                    cameraIcon={'camera'}
                />
                <Box w='full' mt='40px'>
                    <Sui.DisplayValue.InforItem label='Người đại điện' value={userData.name} />
                    <Sui.DisplayValue.InforItem label='Địa chỉ' value={userData.name} />
                    <Sui.DisplayValue.InforItem label='Số điện thoại' value={userData.phone} />
                </Box>
            </ScrollView>
        </Box>
    );
};

export const PersonalInforScreen = React.memo(PersonalInforComponent, (prevProps, nextProps) =>
    isEqual(prevProps, nextProps)
);

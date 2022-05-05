import React, { useRef } from 'react';
import isEqual from 'react-fast-compare';
import { Box, Input, ScrollView, useTheme } from 'native-base';
import * as Sui from '@src/components';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import * as Co from './components';
import logger from '@src/utils/comcom/logger';
import { scale, vScale } from '@src/lib';
import { themes } from '@src/utils';

const PersonalInfoEditComponent = ({ route }: any) => {
    const { colors, fonts } = themes;
    const { control, handleSubmit } = useForm();
    const avatarInput: any = useRef();
    const popupRef: any = useRef();
    const navigation = useNavigation();

    const { params } = route;

    const onSubmit = (value: any) => {
        const requestData = {
            ...value,
            avatar: avatarInput?.current?.getImageUrl(),
        };
        if (requestData) {
            popupRef.current.show();
        }
    };
    return (
        <Box safeArea px={`${scale(16)}px`} bg={colors.white} h='100%'>
            <Sui.Header.HeaderBar navigation={navigation} />
            <ScrollView mt='10px'>
                <Co.Avatar
                    ref={avatarInput}
                    title='Đại lý cường vui'
                    catName='Đại lý'
                    cameraIcon='camera'
                    avatarURL={params.avatar}
                />
                <Box w='full' mt='52px'>
                    <Sui.Input.InputForm
                        control={control}
                        title='Người đại diện'
                        name='name'
                        placeholder=''
                        fontWeight='bold'
                        fontFamily={fonts.hMedium}
                        placeholderTextColor={colors.darkNeu}
                        value={params.name}
                        defaultValue={params.name}
                        w='100%'
                        pl='12px'
                        fontSize='16px'
                        mb={`${vScale(16)}px`}
                    />
                    <Sui.Input.InputForm
                        control={control}
                        title='Địa chỉ'
                        name='address'
                        placeholder=''
                        bg={colors.light}
                        fontWeight='bold'
                        fontFamily={fonts.hMedium}
                        placeholderTextColor={colors.darkNeu}
                        // value={params.address}
                        defaultValue={params.address}
                        w='100%'
                        fontSize='16px'
                        pl='12px'
                        mb={`${vScale(16)}px`}
                    />
                    <Sui.Input.InputForm
                        control={control}
                        title='Số điện thoại'
                        name='phone'
                        placeholder=''
                        keyboardType='number-pad'
                        bg={colors.light}
                        fontWeight='bold'
                        fontFamily={fonts.hMedium}
                        placeholderTextColor={colors.darkNeu}
                        // value={params.phone}
                        defaultValue={params.phone}
                        w='100%'
                        fontSize='16px'
                        pl='12px'
                        mb={`${vScale(16)}px`}
                    />
                    <Sui.Button.ButtonCustom
                        onPress={handleSubmit(onSubmit)}
                        title='Gửi yêu cầu thay đổi'
                        h='45px'
                        mt='28px'
                        _text={{ fontSize: '16px' }}
                    />
                </Box>
            </ScrollView>
            <Sui.Popup.Confirm
                ref={popupRef}
                titlePopup='Đã gửi yêu cầu thay đổi 
                thông tin cá nhân !'
                typePopup='networkError'
                titleButton1='Xong'
                description='Yêu cầu của bạn đã được gửi tới CSKH của POSHACO vui lòng chờ xử lý.'
            />
        </Box>
    );
};

export const PersonalInfoEditScreen = React.memo(PersonalInfoEditComponent, (prevProps, nextProps) =>
    isEqual(prevProps, nextProps)
);

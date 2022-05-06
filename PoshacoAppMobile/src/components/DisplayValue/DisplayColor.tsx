import { StyleSheet, ViewStyle } from 'react-native';
import React from 'react';
import { themes } from '@src/utils';
import { HStack, Text } from 'native-base';
import numeral from 'numeral';
import { vScale } from '@src/lib';

type Props = {
    name: string;
    color?: string;
    price: string | number;
    style?: ViewStyle;
};

const DisplayColor = ({ name, color, price, style }: Props) => {
    return (
        <HStack w='full' style={style} justifyContent='space-between' alignItems={'center'}>
            <Text fontSize='14px' fontFamily={themes.fonts.hBold} fontWeight='bold' color={themes.colors.darkNeu}>
                {name.toUpperCase()}
            </Text>
            <Text fontWeight='bold' fontSize='16px' style={{ color }}>
                {numeral(price).format()} đ
            </Text>
        </HStack>
    );
};

export default DisplayColor;

const styles = StyleSheet.create({
    title: {
        paddingBottom: vScale(8),
        borderColor: themes.colors.white1,
        borderBottomWidth: 1,
    },
    item: {
        marginTop: vScale(10),
    },
});

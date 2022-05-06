import { StyleSheet } from 'react-native';
import React from 'react';
import { HStack, Text } from 'native-base';
import { themes } from '@src/utils';

type Props = {
    label: string;
    value: string | number;
    props?: any;
};

const InforItem = ({ label, value, ...props }: Props) => {
    const { colors, fonts } = themes;
    return (
        <HStack {...props} justifyContent='space-between' mb='12px'>
            <Text fontSize='16px' color={colors.darkNeu} fontFamily={fonts.hMedium}>
                {`${label || 'label'}  `}
            </Text>
            <Text color={colors.dark} fontSize='16px' fontWeight='bold' fontFamily={fonts.hBold}>
                {value || 'value'}
            </Text>
        </HStack>
    );
};

export default InforItem;

const styles = StyleSheet.create({});

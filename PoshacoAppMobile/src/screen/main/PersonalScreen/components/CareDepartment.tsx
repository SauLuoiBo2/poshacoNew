import * as Sui from '@src/components';
import { scale, vScale } from '@src/lib';
import { themes } from '@src/utils';
import { Box, ScrollView, Text, useTheme } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import Communications from 'react-native-communications';

type PropsItem = {
    title: string;
    phonenumber: string;
};

const ItemPhone = ({ title, phonenumber }: PropsItem) => {
    const call = (number: string) => {
        Communications.phonecall(number, true);
    };
    return (
        <Sui.Button.Touchable style={styles.itemPhone} onPress={() => call(phonenumber)}>
            <>
                <Sui.Icon.IconMoon name='phone' color={themes.colors.blueTory} size={27} />
                <Text color={themes.colors.dark} fontSize='17px' style={styles.text}>
                    {title}
                </Text>
            </>
        </Sui.Button.Touchable>
    );
};

const CareDepartment = () => {
    const { colors, fonts } = themes;

    return (
        <Box mb={vScale(38)}>
            <Text
                px={`${scale(16)}`}
                mb='12px'
                color={colors.dark}
                fontWeight='bold'
                fontFamily={fonts.hBold}
                fontSize='18px'
            >
                Lựa chọn bộ phân CSKH
            </Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ItemPhone title='Kế toán - công nợ' phonenumber='0979888650' />
                <ItemPhone title='Nhân viên phụ trách' phonenumber='0979888650' />
                <ItemPhone title='Bộ Phận Vận Chuyển' phonenumber='0979888650' />
            </ScrollView>
        </Box>
    );
};

export default React.memo(CareDepartment);

const styles = StyleSheet.create({
    itemPhone: {
        flexDirection: 'row',
        paddingLeft: scale(28),
        paddingRight: scale(16),
        paddingVertical: vScale(16),
        borderBottomColor: themes.colors.white1,
        borderBottomWidth: 1,
    },
    text: {
        flex: 1,
        paddingLeft: scale(16),
    },
});

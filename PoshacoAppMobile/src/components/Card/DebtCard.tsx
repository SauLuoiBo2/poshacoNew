import { View, Text } from 'react-native';
import React from 'react';
import * as Sui from '@src/components';
import * as Nb from 'native-base';
import { capitalize } from 'lodash';
import { Content, Styles } from '@src/assets';
import { StyleSheet } from 'react-native';
import { vScale, scale } from '@src/lib';
import { themes } from '@src/utils';
import { StylesView } from '@src/assets/styles';
import isEqual from 'react-fast-compare';

const DebtCardCom = ({ onPress, onLayout }: any) => {
    function test() {
        console.log('test');
    }
    return (
        <Nb.Box
            onLayout={onLayout}
            w='full'
            px={`${scale(16)}px`}
            py={`${scale(16)}px`}
            bg={'white'}
            mx='2px'
            borderRadius={10}
            style={StylesView.shadow}
        >
            <Sui.Title.CategoryTitle
                style={Styles.StylesView.status}
                textMore={Content.BASIC.DETAIL}
                onPress={test}
                name={capitalize(Content.MARKET.DEBT_IN_THE_MONTH)}
                sizeText={'16px'}
            />
            <Nb.HStack mt={2} space={`${scale(8)}px`} direction={'column'}>
                <Sui.DisplayValue.DisplayColor
                    color={themes.colors.blue}
                    name={Content.MARKET.TOTAL_ORDER_VALUE}
                    price={21321213321}
                />
                <Sui.DisplayValue.DisplayColor
                    color={themes.colors.green}
                    name={Content.MARKET.FINAL_BALANCE}
                    price={21321123}
                />
                <Sui.DisplayValue.DisplayColor
                    color={themes.colors.orange}
                    name={Content.MARKET.OVER_DUE_BALANCE}
                    price={21321213}
                />
                <Sui.DisplayValue.DisplayColor
                    color={themes.colors.red}
                    name={Content.MARKET.AMOUNT_TO_BE_PAID}
                    price={21321123}
                />
            </Nb.HStack>
        </Nb.Box>
    );
};

export const DebtCard = React.memo(DebtCardCom, (prevProps, nextProps) => isEqual(prevProps, nextProps));

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

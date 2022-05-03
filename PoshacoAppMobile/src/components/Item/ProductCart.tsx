import { StyleSheet, StyleProp, TextStyle } from 'react-native';
import React from 'react';
import { HStack, VStack, Text, Box } from 'native-base';
import { Image } from '..';
import { vScale, scale } from '@src/lib';
import { themes } from '@src/utils';
import numeral from 'numeral';
import { ButtonCustom } from '../Button';
import { Content } from '@src/assets';

type Props = {
    product: any;
    navigation?: any;
    style?: StyleProp<TextStyle>;
};

const ProductCart = ({ product, navigation, style }: Props) => {
    return (
        <HStack
            style={styles.containerProduct}
            w={'full'}
            space={4}
            justifyContent={'flex-start'}
            alignItems={'flex-start'}
        >
            <Image.ImageCommon
                resizeMode={'cover'}
                source={{ uri: product?.image || '' }}
                placeholder
                style={styles.imageProduct}
            />
            <VStack flex={1} height={'full'} justifyContent={'space-between'}>
                <VStack>
                    <Text
                        color={themes.colors.dark}
                        fontFamily={themes.fonts.hBold}
                        fontWeight='bold'
                        fontSize='16px'
                        noOfLines={2}
                        textTransform='uppercase'
                    >
                        {product?.name || ''}
                    </Text>
                    <HStack fontFamily={themes.fonts.hMedium} fontSize='16px'>
                        <Text fontSize='16px' color={themes.colors.darkNeu}>
                            Chỉ từ:
                        </Text>
                        <Text
                            ml='2px'
                            fontSize='16px'
                            color={themes.colors.red}
                            fontWeight='bold'
                            fontFamily={themes.fonts.hBold}
                        >
                            {numeral(product?.price || 0).format()}₫
                        </Text>
                        <Text ml='2px' fontSize='16px' color={themes.colors.darkNeu}>
                            / 1 tấm
                        </Text>
                    </HStack>
                </VStack>
                {/* button */}
                <ButtonCustom
                    isRound
                    title={Content.BASIC.BUY.toUpperCase()}
                    style={styles.buttonOrdered}
                    _text={{
                        color: themes.colors.white,
                        fontSize: '12px',
                        fontWeight: 'bold',
                        fontFamily: 'hBold',
                    }}
                    // onPress={onPress}
                    w={`${scale(84)}`}
                    h={`${vScale(32)}`}
                    alignSelf='flex-end'
                />
            </VStack>
        </HStack>
    );
};

export default ProductCart;

const styles = StyleSheet.create({
    containerProduct: {
        marginBottom: scale(14),
        flexDirection: 'row',
        marginVertical: vScale(6),
        flex: 1,
        borderRadius: 8,
    },
    imageProduct: {
        width: scale(104),
        height: vScale(130),
        borderRadius: 10,
    },
    buttonOrdered: {
        height: vScale(40),
    },
});

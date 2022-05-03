import { StyleSheet, ViewStyle } from 'react-native';
import React from 'react';
import isEqual from 'react-fast-compare';
import { Box, HStack, Text, VStack } from 'native-base';
import * as Sui from '@src/components';
import { Content, Styles } from '@src/assets';
import { RenderOrderStatus, themes } from '@src/utils';
import { vScale, scale } from '@src/lib';
import moment from 'moment';
import numeral from 'numeral';

const ORDER_STATUS = {
    id: 'CT1908/1019',
    status: new RenderOrderStatus().status.CANCELED.ID,
    createAt: new Date(),
    price: '23000000',
    rate: 3.4,
};

type Props = {
    onPressOrder: (arg0: any) => void;
    orderStatus?: any;
    style?: ViewStyle;
    onPressRate?: () => void;
};

const OrderStatusCom = ({ onPressOrder, orderStatus = ORDER_STATUS, style, onPressRate }: Props) => {
    const onPress = (): void => {
        onPressOrder(orderStatus);
    };
    const renderOrderStatus = new RenderOrderStatus();
    return (
        <Box style={[style, styles.content]}>
            <VStack>
                {/* title */}
                <Sui.Title.CategoryTitle
                    sizeText='18px'
                    textMore={Content.BASIC.MORE}
                    name={Content.MARKET.CATEGORY.ORDER_STATUS}
                    style={Styles.StylesView.category}
                />
                {/* card */}
                <Sui.Button.Touchable onPress={onPress} style={[style]}>
                    <Box padding={4} bg={'white'} style={Styles.StylesView.shadow}>
                        {/* header */}
                        <HStack style={Styles.StylesView.status} justifyContent='space-between'>
                            <Text fontFamily={themes.fonts.hMedium} fontWeight='medium'>
                                {orderStatus?.id || ' '}
                            </Text>
                            <Text
                                fontFamily={themes.fonts.hMedium}
                                fontWeight='medium'
                                style={{ color: renderOrderStatus.colorStatus(orderStatus.status) }}
                            >
                                {renderOrderStatus.nameStatus(orderStatus?.status || 'DELIVERED')}
                            </Text>
                        </HStack>
                        {/* content */}
                        <HStack py={`${vScale(3)}px`} justifyContent={'space-between'}>
                            <VStack pt='12px'>
                                <Text
                                    fontFamily={themes.fonts.hMedium}
                                    fontWeight='medium'
                                    fontSize='14px'
                                    numberOfLines={2}
                                >
                                    Đơn giá
                                </Text>
                                <Text
                                    color={themes.colors.darkNeu}
                                    fontWeight={500}
                                    fontFamily={themes.fonts.hMedium}
                                    my={`${vScale(3)}px`}
                                >
                                    {moment(orderStatus?.createAt || '').format('HH:MM DD/MM/YYYY')}
                                </Text>
                                <Text
                                    color={themes.colors.red}
                                    fontSize='18px'
                                    fontWeight='bold'
                                    fontFamily={themes.fonts.hBold}
                                >
                                    {numeral(orderStatus?.price || 0).format()}₫
                                </Text>
                            </VStack>
                            <Sui.Image.ImageCommon
                                source={renderOrderStatus.renderImage(orderStatus.status)}
                                style={styles.imgStatus}
                            />
                        </HStack>
                    </Box>
                </Sui.Button.Touchable>
            </VStack>
        </Box>
    );
};

export const OrderStatus = React.memo(OrderStatusCom, (prevProps, nextProps) => isEqual(prevProps, nextProps));

const styles = StyleSheet.create({
    content: {
        // paddingHorizontal: scale(12),
        overflow: 'hidden',
        paddingTop: vScale(12),
        // marginTop: vScale(12),
        // backgroundColor: themes.colors.white,
    },
    status: {
        paddingBottom: vScale(10),
        borderColor: themes.colors.white1,
        borderBottomWidth: 1,
    },
    imgStatus: {
        width: scale(90),
        height: scale(90),
    },
    starRating: {
        paddingLeft: 3,
    },
});

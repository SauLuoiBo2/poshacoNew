import React, { useEffect, useState } from 'react';
import isEqual from 'react-fast-compare';
import { Box, Container, ScrollView, useTheme, useToast, Text, StatusBar } from 'native-base';
import { Title, Header, Item, Progress } from '@src/components';
import { useNavigation } from '@react-navigation/native';

import moment from 'moment';
import RenderHTML from 'react-native-render-html';
import { StyleSheet, useWindowDimensions } from 'react-native';
import logger from '@src/utils/comcom/logger';
import { scale, vScale } from '@src/lib';
import { themes } from '@src/utils';

const NotificationDetailComponent = (props: any) => {
    const { route } = props;
    const { colors } = themes;
    const toast = useToast();
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any>(null);
    const { width } = useWindowDimensions();

    logger.debug('data', data);
    const goBack = () => navigation.goBack();

    useEffect(() => {
        const payload = route?.params?.payload;
        const payloadType = typeof payload;
        if (payloadType === 'object') {
            setData({ data: payload, loading: false });
        } else {
            toast.show({
                description: 'Lỗi. Xin thử lại !',
            });
        }
    }, []);

    return loading ? (
        <Box safeArea mt={16}>
            <Box mt={16} />
            <Progress.Loading />
        </Box>
    ) : (
        <Box safeArea>
            <Header.HeaderBar navigation={navigation} onPressLeft={goBack} />
            {data ? (
                <ScrollView m={`${scale(12)}px`} showsVerticalScrollIndicator={false}>
                    <Text fontSize={24} fontWeight='bold' color={colors.dark} mb={`${vScale(16)}px`} lineHeight={35}>
                        {data?.data?.title}
                    </Text>
                    <Text fontSize={16} mb={`${vScale(24)}px`} color={colors.darkGrey}>
                        {moment(data?.data?.createdAt * 1000).format('HH:MM DD/MM/YYYY')}
                    </Text>
                    <RenderHTML
                        contentWidth={width}
                        // renderers={{
                        //     img: (htmlAttribs, index) => {
                        //         if (htmlAttribs && htmlAttribs.src) {
                        //             return (
                        //                 <Image
                        //                     key={index}
                        //                     style={styles.imgHTML}
                        //                     source={{ uri: htmlAttribs.src }}
                        //                     placeholder
                        //                 />
                        //             );
                        //         }
                        //     },
                        // }}
                        source={{ html: data?.data?.content }}
                    />
                    <Title.CategoryTitle name='Sản phẩm khuyến mãi' textMore={' '} />
                    <Item.ProductCart product={product} navigation={navigation} />
                </ScrollView>
            ) : (
                <Item.ListEmpty />
            )}
        </Box>
    );
};

const product = {
    id: 123,
    name: 'Tôn Việt hàng poshaco az100',
    image: 'https://picsum.photos/208',
    price: 780000,
};
// const styles = StyleSheet.create({
//     imgHTML: {
//         width: scale(343),
//         height: scale(343) / 1.78,
//         alignSelf: 'center',
//     },
// });

export const NotificationDetail = React.memo(NotificationDetailComponent, (prevProps, nextProps) =>
    isEqual(prevProps, nextProps)
);

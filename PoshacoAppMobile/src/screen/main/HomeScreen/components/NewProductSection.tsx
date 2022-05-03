import { View } from 'react-native';
import React from 'react';
import isEqual from 'react-fast-compare';
import * as Sui from '@src/components';
import { Box, HStack, Text, VStack } from 'native-base';
import { Content, Styles } from '@src/assets';

const NewProductSectionCom = () => {
    const [products, setProducs] = React.useState<any>([]);
    React.useEffect(() => {
        const time = setTimeout(() => {
            const data = [];
            for (let i = 0; i < 5; i++) {
                data.push({
                    id: i,
                    name: `Tôn Việt hàng poshaco az100 ${i + 1}`,
                    image: `https://picsum.photos/20${i}`,
                    price: 114980000,
                });
            }
            setProducs(data);
        }, 1000);

        return () => clearTimeout(time);
    }, []);
    return (
        <Box>
            <VStack w={'full'}>
                {/* title */}
                <Sui.Title.CategoryTitle
                    sizeText='18px'
                    textMore={Content.BASIC.MORE}
                    name={Content.MARKET.CATEGORY.NEW_PRODUCTS}
                    style={Styles.StylesView.category}
                />
                {/* Wrapper */}
                <VStack w={'full'}>
                    {products &&
                        Array.isArray(products) &&
                        products.length > 0 &&
                        products.map((item, index) => <Sui.Item.ProductCart key={index} product={item} />)}
                </VStack>
            </VStack>
        </Box>
    );
};

export const NewProductSection = React.memo(NewProductSectionCom, (prevProps, nextProps) =>
    isEqual(prevProps, nextProps)
);

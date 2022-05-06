import React from 'react';
import { StyleSheet, View } from 'react-native';
import isEqual from 'react-fast-compare';
import { Box, Center, useTheme, Text } from 'native-base';
import { Button, Image } from '@src/components';
import { images } from '@src/assets';
import { scale, vScale } from '@src/lib';
import { themes } from '@src/utils';

type Props = {
    onPress?: () => void;
};

const IntroCompontent = ({ onPress }: Props) => {
    const { colors } = themes;

    return (
        <Box>
            <Image.ImageCommon source={images.logo} style={styles.logo} />
            <Box mt={10}>
                <Box>
                    <Text fontSize='24px' mb='12px' fontWeight='bold'>
                        Ứng dụng dành cho Đại lý
                    </Text>
                    <Text fontSize='14px' color={colors.darkNeu}>
                        Vui lòng đăng nhập để bắt đầu sử dụng ứng dụng dành cho Đại lý của POSHACO.
                    </Text>
                </Box>
            </Box>
            <Center>
                <Image.ImageCommon source={images.imgLogin} style={styles.imgLogin} />
            </Center>
            <Button.ButtonCustom borderRadius={16} title='Đăng nhập' h='48px' mt='32px' onPress={onPress} />
        </Box>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: scale(121),
        height: scale(45),
        marginTop: vScale(10),
    },
    imgLogin: {
        width: scale(200),
        height: scale(200),
    },
});

export const IntroScreen = React.memo(IntroCompontent, (prevProps, nextProps) => isEqual(prevProps, nextProps));

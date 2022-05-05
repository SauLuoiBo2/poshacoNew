import { StyleSheet } from 'react-native';
import React from 'react';
import { Box, Center, Text } from 'native-base';
import { Image, Input, Button } from '@src/components';
import { images } from '@src/assets';
import { scale, vScale } from '@src/lib';
import { themes } from '@src/utils';
import { useForm } from 'react-hook-form';

type Props = {
    onPress: () => void;
    loading: boolean;
};

const PhoneScreen = ({ onPress, loading }: Props, ref: any) => {
    const { colors, fonts } = themes;

    // hook
    const {
        control,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm({
        defaultValues: {
            phone: '',
        },
    });

    // function

    function onSubmit() {
        onPress();
    }

    return (
        <Box>
            <Image.ImageCommon source={images.logo} style={styles.logo} />
            <Box mt={10}>
                <Box pointerEvents={loading ? 'none' : 'auto'}>
                    <Text fontSize='24px' mb='12px' fontWeight='bold'>
                        Số điện thoại
                    </Text>
                    <Text fontSize='14px' color={colors.darkNeu}>
                        Nhập số điện thoại đã được liên kết với tài khoản POSHACO của bạn.
                    </Text>
                </Box>
            </Box>
            <Center>
                <Input.InputForm
                    control={control}
                    // title='Số điện thoại'
                    placeholder='Nhập số điện thoại'
                    fontSize='16px'
                    mt='40px'
                    keyboardType='number-pad'
                    name='phone'
                    rules={{
                        required: 'Số điện thoại không được để trống',
                        pattern: {
                            value: /^[0-9]{10}/i,
                            message: 'Số điện thoại không hợp lệ',
                        },
                    }}
                />
                {errors.phone && (
                    <Box alignItems='flex-start' w='full' mt={2} mb='0'>
                        <Text color={colors.red} fontSize='14px'>
                            {errors?.phone?.message}
                        </Text>
                    </Box>
                )}
            </Center>
            <Button.ButtonCustom
                title='Tiếp tục'
                h='48px'
                mt='32px'
                // onPress={handleSubmit(onSubmit)}
                onPress={handleSubmit(onSubmit)}
            />
        </Box>
    );
};

export default PhoneScreen;

const styles = StyleSheet.create({
    logo: {
        width: scale(121),
        height: scale(45),
        marginTop: vScale(10),
    },
});

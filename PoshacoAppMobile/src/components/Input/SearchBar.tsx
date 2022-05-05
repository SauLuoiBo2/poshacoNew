import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { scale, vScale } from '@src/lib';
import { themes } from '@src/utils';
import { Box } from 'native-base';
import { InputForm } from './InputForm';
import { IconMoon } from '../Icon';
import { useForm } from 'react-hook-form';

type Props = {
    placeholder?: string;
};

const SearchBar = ({ placeholder = 'Tìm kiếm' }: Props) => {
    const { colors, fonts } = themes;
    const { control } = useForm();
    return (
        <Box
            w='full'
            // pl={`${scale(10)}px`}
            // pr={`${scale(15)}px`}
            borderRadius={'8px'}
            my={`${vScale(10)}px`}
            bg={colors.light}
            h='40px'
            position='relative'
            justifyContent='center'
        >
            <Box position='absolute' zIndex={2} ml='6px'>
                <IconMoon name='search' color={colors.darkNeu} size={25} />
            </Box>
            <InputForm
                control={control}
                name='search'
                placeholder={placeholder}
                fontWeight='bold'
                fontFamily={fonts.hMedium}
                placeholderTextColor={colors.darkNeu}
                borderRadius={'8px'}
                w='100%'
                pl='32px'
                fontSize='16px'
            />
        </Box>
    );
};

export default SearchBar;

const styles = StyleSheet.create({});

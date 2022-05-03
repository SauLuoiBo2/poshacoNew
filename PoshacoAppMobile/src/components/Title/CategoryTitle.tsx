import React from 'react';
import { HStack, Text } from 'native-base';
import { Touchable } from '../Button';
import { Content } from '@src/assets';
import { capitalize } from 'lodash';
import { ViewStyle } from 'react-native';

type Props = {
    style?: ViewStyle;
    name: string;
    textMore?: string;
    onPress?: () => void;
    sizeText?: string;
};

const CategoryTitle = ({ style, name, textMore, onPress, sizeText }: Props) => {
    return (
        <HStack w='full' style={style} justifyContent='space-between'>
            <Text fontWeight='bold' fontSize={sizeText || '18px'}>
                {name}
            </Text>
            <Touchable onPress={onPress}>
                <Text color={'blue'} fontSize='16px' mt='2px'>
                    {capitalize(textMore)}
                </Text>
            </Touchable>
        </HStack>
    );
};

export default React.memo(CategoryTitle);

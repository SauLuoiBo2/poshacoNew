import React from 'react';
import { ActivityIndicator, StyleProp, TextStyle } from 'react-native';
import * as Progress from 'react-native-progress';
import { Center, useTheme } from 'native-base';
import { themes } from '@src/utils';

type Props = {
    color?: string;
    style?: StyleProp<TextStyle>;
    progress?: boolean;
    size?: string;
};

const Loading = ({ progress = true, size = 'small', color, style }: Props) => {
    const { colors } = themes;

    const colorI = color ? color : colors.blue;
    return (
        <Center>
            {progress ? (
                <Progress.CircleSnail size={28} color={colorI} thickness={2} strokeCap={'square'} />
            ) : (
                <ActivityIndicator size={'small'} color={colorI} style={style} />
            )}
        </Center>
    );
};

export default Loading;

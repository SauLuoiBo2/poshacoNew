import { StyleSheet } from 'react-native';
import { scale, vScale } from '@src/lib';

export const StylesImages = StyleSheet.create({
    avatar: {
        width: scale(40),
        height: scale(40),
        borderRadius: scale(25),
        marginRight: scale(12),
        zIndex: 1,
    },
});

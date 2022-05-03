import { StyleSheet } from 'react-native';
import { scale, vScale } from '@src/lib';
import { themes } from '@src/utils';

export const StylesButton = StyleSheet.create({
    btnRight: {
        height: scale(40),
        width: scale(40),
        borderRadius: scale(20),
        backgroundColor: themes.colors.blueMalibu,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 3,
    },
});

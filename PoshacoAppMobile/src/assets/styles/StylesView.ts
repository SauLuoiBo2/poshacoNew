import { themes } from '@src/utils';

import { StyleSheet } from 'react-native';
import { scale, vScale } from '@src/lib';

export const StylesView = StyleSheet.create({
    shadow: {
        shadowColor: themes.colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 10,
        elevation: 10,
    },
    status: {
        paddingBottom: vScale(10),
        borderColor: themes.colors.white1,
        borderBottomWidth: 1,
    },
    category: {
        paddingBottom: vScale(10),
    },
});

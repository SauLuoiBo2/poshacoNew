import React from 'react';
import { useTheme, Button, IButtonProps } from 'native-base';
import { throttle } from 'lodash';

import { vScale, scale } from '@src/lib';
import { themes } from '@src/utils';

interface Props extends IButtonProps {
    // onPress?: void;
    title: string;
    isRound?: boolean;
    isOutline?: boolean;
    dashed?: boolean;
}

const ButtonCustom = (props: Props) => {
    const { bg = themes.colors.blue, onPress, title, h = scale(12), isDisabled, isRound, isOutline, dashed } = props;

    const bgColor = isOutline
        ? themes.colors.trans
        : isDisabled
        ? themes.colors.disable
        : isOutline
        ? themes.colors.trans
        : bg;
    const TextColor = isDisabled ? themes.colors.darkNeu : isOutline ? themes.colors.blue : themes.colors.white;
    const BorderRadius = isRound ? 50 : 0;

    const borderColor = isDisabled ? themes.colors.disable : isOutline ? themes.colors.blue : themes.colors.trans;
    const borderStyle = dashed ? ' dashed' : 'solid';

    return (
        <Button
            bg={bgColor}
            // color={TextColor}
            borderRadius={BorderRadius}
            borderColor={borderColor}
            borderWidth='1'
            // borderStyle={borderStyle}
            _text={{ color: TextColor }}
            _pressed={{ bg: themes.colors.btnHeader }}
            _loading={{ bg: themes.colors.btnHeader }}
            _disabled={{ bg: bgColor, text: TextColor, opacity: 1 }}
            w='auto'
            h={h}
            onPress={onPress && throttle(onPress, 1500, { leading: false })}
            {...props}
        >
            {title}
        </Button>
    );
};

// const styles = StyleSheet.create({
//     wrapperNormal: {
//         width: scale(342),
//         height: vScale(48),
//         justifyContent: 'center',
//         alignItems: 'center',
//     },

//     wrapperRound: {
//         height: vScale(38),
//         justifyContent: 'center',
//         alignItems: 'center',
//         paddingHorizontal: scale(16),
//         borderRadius: scale(20),
//     },
//     wrapperDash: {
//         height: vScale(48),
//         width: scale(342),
//         justifyContent: 'center',
//         alignItems: 'center',
//         flexDirection: 'row',
//         borderColor: themes.colors.blue,
//         borderWidth: 1,
//         borderStyle: 'dashed',
//         borderRadius: 2,
//     },

//     textRound: {
//         // fontSize: FontSize.size12,
//         // fontFamily: Fonts.hBold,
//     },

//     textFillNormal: { color: themes.colors.white },
//     textFillDisable: { color: themes.colors.darkNeu },
//     bgFillNormal: { backgroundColor: themes.colors.blue },
//     bgFillDisable: { backgroundColor: themes.colors.disable },

//     textOutlineNormal: { color: themes.colors.blue },
//     textOutlineDisable: { color: themes.colors.darkNeu },
//     bgOutlineNormal: {
//         backgroundColor: themes.colors.white,
//         borderColor: themes.colors.blue,
//         borderWidth: 1,
//     },
//     bgOutlineDisable: {
//         backgroundColor: themes.colors.white,
//         borderColor: themes.colors.disable,
//         borderWidth: 1,
//     },
//     dashIcon: { marginRight: 5 },
// });
export default ButtonCustom;

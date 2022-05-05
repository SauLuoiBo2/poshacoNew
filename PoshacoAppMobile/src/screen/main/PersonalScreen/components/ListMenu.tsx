import { StyleSheet } from 'react-native';
import React from 'react';
import { Box, Text, useTheme } from 'native-base';
import * as Sui from '@src/components';
import { vScale, scale } from '@src/lib';
import { themes } from '@src/utils';
import { SCREENS } from '@src/navigation';

const Item = ({ icon, text, color, onPress, fonts }: any) => (
    <Sui.Button.Touchable style={styles.itemDetail} onPress={onPress}>
        <>
            <Sui.Icon.IconMoon name={icon} color={color} size={28} style={styles.iconDetail} />
            <Text fontWeight='bold' style={{ color }}>
                {text}
            </Text>
        </>
    </Sui.Button.Touchable>
);

const ListMenu = ({ navigation, onLogout, ...props }: any) => {
    return (
        <Box px={`${scale(14)}px`} {...props}>
            <Item
                icon='store'
                text='Thông tin đại lý của bạn'
                color={themes.colors.darkNeu}
                fonts={themes.fonts}
                onPress={() => navigation.navigate(SCREENS.PERSONAL_INFO_SCREEN)}
            />
            <Item
                icon='info-circle'
                text='Thông tin về Poshaco'
                color={themes.colors.darkNeu}
                fonts={themes.fonts}
                onPress={() => navigation.navigate(SCREENS.PERSONAL_ABOUT_US_SCREEN)}
            />
            <Item
                icon='help'
                text='Trung tâm trợ giúp'
                color={themes.colors.darkNeu}
                fonts={themes.fonts}
                onPress={() => navigation.navigate(SCREENS.PERSONAL_SUPPORT_SCREEN)}
            />
            <Item icon='logout' text='Đăng xuất' color={themes.colors.red} onPress={onLogout} />
        </Box>
    );
};

const styles = StyleSheet.create({
    itemDetail: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: vScale(12),
    },
    iconDetail: {
        marginRight: vScale(8),
    },
});

export default React.memo(ListMenu);

/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Text, Box, useTheme, Button, HStack, useToast } from 'native-base';
import { Icon, Image } from '@src/components';
import { themes } from '@src/utils/themes';
import { images } from '@src/assets';
import { vScale, scale } from '@src/lib';

import { SCREENS } from '@src/navigation/screenTypes';
import { ENDABLE_CREATE_ORDER_SCREEN } from '@src/config';

function TabBarCustom({ state, descriptors, navigation }: any) {
    const tabarVisible = state.index === 2 ? 'none' : 'flex';
    const toast = useToast();

    return (
        <HStack
            alignItems='flex-start'
            bg={themes.colors.white}
            style={[styles.container]}
            display={tabarVisible}
            justifyContent='space-between'
        >
            {state.routes.map((route: any, index: number) => {
                const { options } = descriptors[route.key];
                const label = options.tabBarLabel;
                const { iconActive, iconDeactivate } = options;
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.name,
                        canPreventDefault: true,
                    });

                    if (event.target === 'CreateOrderTab') {
                        if (!ENDABLE_CREATE_ORDER_SCREEN) {
                            return toast.show({ title: 'Tính năng đang được cập nhật', placement: 'bottom' });
                        }
                        return navigation.navigate(SCREENS.CREATE_ORDER_SCREEN);
                    }
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };
                return (
                    <Button
                        alignItems='center'
                        justifyContent='center'
                        key={index}
                        variant='unstyled'
                        display='flex'
                        onPress={onPress}
                    >
                        <Box alignItems='center' style={styles.wrapItemBottom}>
                            {index === 2 ? (
                                <Image.ImageCommon source={images.tabCreate} style={styles.iconCreate} />
                            ) : (
                                <Icon.IconMoon
                                    name={isFocused ? iconDeactivate : iconActive}
                                    color={isFocused ? themes.colors.blue : themes.colors.darkNeu}
                                    type='AntDesign'
                                    size={25}
                                />
                            )}
                        </Box>

                        <Text
                            fontSize='14px'
                            fontFamily={isFocused ? themes.fonts.hMedium : themes.fonts.hRegular}
                            color={isFocused ? themes.colors.blue : themes.colors.darkNeu}
                        >
                            {label}
                        </Text>
                    </Button>
                );
            })}
        </HStack>
    );
}

const styles = StyleSheet.create({
    container: {
        ...Platform.select({
            ios: {
                shadowColor: themes.colors.black,
                shadowOffset: { height: -0.5 },
                shadowOpacity: 0.18,
                shadowRadius: 1,
                height: vScale(80),
                paddingTop: vScale(10),
            },
            android: {
                borderColor: themes.colors.light,
                borderTopWidth: 1,
            },
        }),
    },
    wrapItemBottom: {
        height: vScale(28),
    },
    iconCreate: {
        width: scale(60),
        height: scale(55),
        position: 'absolute',
        top: vScale(-28),
        shadowColor: themes.colors.black,
        shadowOpacity: 0.18,
        shadowRadius: 1,
        elevation: 2,
    },
});

export default TabBarCustom;

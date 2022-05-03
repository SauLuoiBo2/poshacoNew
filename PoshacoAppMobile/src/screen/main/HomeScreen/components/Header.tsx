import { View, Text } from 'react-native';
import React from 'react';
import * as Assets from '@src/assets';
import * as Nb from 'native-base';
import { vScale } from '@src/lib';
import * as Sui from '@src/components';
import { capitalize, startCase } from 'lodash';

type Props = {
    navigation?: () => void;
    onPressAvatar?: () => void;
    onPressNotification: () => void;
    userName?: string;
};

const Header = ({ navigation, onPressAvatar, onPressNotification, userName }: Props) => {
    return (
        <Nb.HStack px={4} mt={`${vScale(40)}px`} pt={`${vScale(16)}px`} justifyContent='space-between'>
            <Nb.HStack>
                <Sui.Button.Touchable onPress={onPressAvatar}>
                    <Sui.Image.ImageCommon
                        style={Assets.Styles.StylesImages.avatar}
                        // onPress={onPressAvatar}
                        source={{
                            // uri: `http://dev.timevn.com:4000/api/v1/user/uploads/${infoUser.avatar}`,
                            uri: 'https://picsum.photos/40/40',
                        }}
                    />
                </Sui.Button.Touchable>

                <Nb.View>
                    <Nb.Text fontSize='14px' color={'white'}>
                        {capitalize(Assets.Content.BASIC.HELLO)}!
                    </Nb.Text>
                    <Nb.Text fontSize='18px' fontWeight='bold' color={'white'}>
                        {/* {infoUser.fullName} */}
                        {startCase(userName || 'nguyen van ba ')}
                    </Nb.Text>
                </Nb.View>
            </Nb.HStack>

            <Sui.Button.Touchable style={Assets.Styles.StylesButton.btnRight} onPress={onPressNotification}>
                <Sui.Icon.IconMoon name='bell' color={'white'} size={25} />
            </Sui.Button.Touchable>
        </Nb.HStack>
    );
};

export default Header;

import React from 'react';
import { themes } from '@src/utils';
import * as Nb from 'native-base';
import * as Sui from '@src/components';
import { images } from '@src/assets';
import isEqual from 'react-fast-compare';
import { testFun, vScale } from '@src/lib';
import * as Co from './components';
import { StyleSheet } from 'react-native';

const HomeCom = () => {
    // state
    const [bgColor, setBgColor] = React.useState<string>('white');
    const [barStyle, setBarStyle] = React.useState<any>('light-content');
    const [heightImg, setHeightImt] = React.useState(0);
    const [heightOver, setHeightOver] = React.useState(vScale(160));

    // image
    const onLoadImage = (event: any) => setHeightImt(event.nativeEvent.height);

    const onLayout = (event: any) => setHeightOver(event.nativeEvent.layout.height);

    // scroll
    const onScroll = (event: any) => {
        const offSetTop = event.nativeEvent.contentOffset.y;
        if (offSetTop > heightImg) {
            setBgColor('blue');
            setBarStyle('dark-content');
        } else {
            setBgColor('white');
            setBarStyle('light-content');
        }
    };

    return (
        <Nb.Box>
            <Nb.StatusBar backgroundColor={bgColor} barStyle={barStyle} />
            <Nb.ScrollView>
                <Sui.Image.ImageCommon onLoad={onLoadImage} source={images.header} style={styles.banner} placeholder>
                    <Co.Header onPressNotification={testFun} onPressAvatar={testFun} />
                </Sui.Image.ImageCommon>
            </Nb.ScrollView>
        </Nb.Box>
    );
};

export const Home = React.memo(HomeCom, (prevProps, nextProps) => isEqual(prevProps, nextProps));

const styles = StyleSheet.create({
    banner: {
        width: '100%',
        height: vScale(210),
    },
    scroll: {
        // backgroundColor: themes.colors.white,
        // borderRadius: 8,
    },
    hotline: {
        width: '100%',
        height: vScale(104),
        marginBottom: vScale(24),
    },
    shadow: {
        shadowColor: themes.colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    order: {
        marginBottom: vScale(12),
        paddingTop: 0,
    },
    marginTitle: {
        marginTop: vScale(24),
    },
});

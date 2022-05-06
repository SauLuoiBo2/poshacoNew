import FastImage from 'react-native-fast-image';
import { images as imagesData } from '../../assets';
import React, { ReactElement } from 'react';
import { Image as ImageRB } from 'native-base';

type Props = {
    source: any;
    children?: ReactElement;
    placeholder?: boolean;
    useFastImage?: boolean;
    style?: any;
    onLoad?: any;
    resizeMode?: any;
};

const ImageCommon = ({
    useFastImage = true,
    placeholder = false,
    children,
    resizeMode = 'contain',
    ...props
}: Props) => {
    if (useFastImage && placeholder) {
        return (
            <FastImage resizeMode={resizeMode} {...props} source={imagesData.placeholder}>
                <FastImage resizeMode={resizeMode} {...props}>
                    {children}
                </FastImage>
            </FastImage>
        );
    }

    if (useFastImage) {
        return <FastImage resizeMode={resizeMode} {...props} />;
    }

    return <ImageRB resizeMode={resizeMode} {...props} />;
};

export { ImageCommon };

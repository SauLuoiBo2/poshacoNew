import { StyleSheet } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import isEqual from 'react-fast-compare';
import { Box, ScrollView, Text, theme, useTheme } from 'native-base';
import * as Sui from '@src/components';
import { useNavigation } from '@react-navigation/native';

import { SCREENS } from '@src/navigation';
import RBSheet from 'react-native-raw-bottom-sheet';

// import QuestionItem from './Components/QuestionItem';
// import Contacts from './Components/Contacts';
// import CareDepartment from './Components/CareDepartment';
import logger from '@src/utils/comcom/logger';
import { scale, testFun, vScale } from '@src/lib';
import { themes } from '@src/utils';
import { QuestionItem, Contacts, CareDepartment } from './components';

const dataQuestion = [
    {
        id: 1,
        title: 'Tôi phải làm gì khi muốn trả hàng hoàn tiền',
    },
    {
        id: 2,
        title: 'Khi nào Poshaco giao hàng cho tôi? Thời gian giao hàng là bao lâu?',
    },
    {
        id: 3,
        title: 'Các câu hỏi liên quan đến Hoàn/Trả hàng.',
    },
    {
        id: 4,
        title: 'Tại sao tôi không nhận được mã xác minh (OTP) khi đăng nhập tài khoản Poshaco bằng số điện thoại?',
    },
];

const PersonalSupportComponent = () => {
    const { colors, fonts } = themes;
    const navigation = useNavigation();
    const [question, setQuestion] = useState<any>([]);
    const bottomSheet: any = useRef();

    useEffect(() => {
        const questionsData = [];
        for (let i = 0; i < 5; i++) {
            questionsData.push({
                id: i,
                title: `Khi nào Poshaco giao hàng cho tôi? Thời gian giao hàng là bao lâu: ${i + 1}`,
            });
        }
        setQuestion(dataQuestion);
    }, []);

    return (
        <Box safeArea bg={colors.white} h='100%'>
            <Sui.Header.HeaderBar
                px={`${scale(16)}px`}
                titleLeft='Trung tâm hỗ trợ'
                nameIconRight='close'
                onPressRight={() => navigation.goBack()}
            />
            <ScrollView pt={`${scale(16)}px`}>
                <Box px={`${scale(16)}px`}>
                    <Text fontSize='18px' fontFamily={fonts.hBold} fontWeight='bold' color={colors.darkNeu}>
                        Câu hỏi thường gặp
                    </Text>
                </Box>
                {question &&
                    Array.isArray(question) &&
                    question.length > 0 &&
                    question.map(({ title, id }) => <QuestionItem key={id} title={title} />)}
                {/* question.map(({ title, id }) => <Text key={id}>dsaasddas</Text>)} */}
                <Box mt='24px' px={`${scale(16)}px`}>
                    <Text mb='24px' fontSize='18px' fontFamily={fonts.hBold} fontWeight='bold' color={colors.darkNeu}>
                        Bạn có câu hỏi nào khác không?
                    </Text>
                    <Box>
                        <Contacts
                            title='Chat ngay'
                            iconName='support'
                            colorBg={colors.orange}
                            onPress={() => navigation.navigate(SCREENS.PERSONAL_MESSAGE_SCREEN)}
                        />
                        <Contacts
                            title='E-mail'
                            labelTxt='Gửi câu hỏi của bạn!'
                            iconName='mail-send'
                            colorBg={colors.greenEmerald}
                            onPress={testFun}
                        />
                        <Contacts
                            title='Điện thoại'
                            iconName='phone'
                            labelTxt='Liên hệ với bộ phận CSKH'
                            colorBg={colors.blueMalibu}
                            onPress={() => bottomSheet.current.open()}
                        />
                    </Box>
                </Box>
            </ScrollView>
            <RBSheet
                ref={bottomSheet}
                // borderRadius={10}
                closeOnDragDown
                dragFromTopOnly
                // closeOnPressMask={false}
                height={vScale(320)}
                openDuration={250}
                customStyles={{
                    container: styles.containerSheet,
                    // draggableIcon: styles.draggableIcon,
                }}
            >
                <CareDepartment />
            </RBSheet>
        </Box>
    );
};

export const PersonalSupportScreen = React.memo(PersonalSupportComponent, (prevProps, nextProps) =>
    isEqual(prevProps, nextProps)
);

const styles = StyleSheet.create({
    containerSheet: {
        borderRadius: 10,
    },
});

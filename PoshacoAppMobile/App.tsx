import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NativeBaseProvider, extendTheme, Text } from 'native-base';
import { AppContainer } from './src/navigation';
import { themes } from '@src/utils';

const theme = extendTheme(themes);

const App = () => {
    return (
        <SafeAreaProvider>
            <NativeBaseProvider theme={theme}>
                <AppContainer />
            </NativeBaseProvider>
        </SafeAreaProvider>
    );
};

export default App;

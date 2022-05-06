import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NativeBaseProvider, extendTheme, Text } from 'native-base';
import { AppContainer } from './src/navigation';
import { themes } from '@src/utils';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '@src/queries';

const theme = extendTheme(themes);

const App = () => {
    return (
        <SafeAreaProvider>
            <QueryClientProvider client={queryClient}>
                <NativeBaseProvider theme={theme}>
                    <AppContainer />
                </NativeBaseProvider>
            </QueryClientProvider>
        </SafeAreaProvider>
    );
};

export default App;

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NativeBaseProvider, extendTheme, Text } from 'native-base';
import { AppContainer } from '@src/navigation';
import { Title } from '@src/components';

const App = () => {
    return (
        <SafeAreaProvider>
            <NativeBaseProvider>
                <AppContainer />
            </NativeBaseProvider>
        </SafeAreaProvider>
    );
};

export default App;

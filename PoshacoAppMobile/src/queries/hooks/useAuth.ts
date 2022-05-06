import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation, useQuery } from 'react-query';
import Config from 'react-native-config';
import AuthFireBase from '@react-native-firebase/auth';
import { authKey } from '../keys';
import { queryClient } from '../config';
import logger from '@src/utils/comcom/logger';

// const queryClient = useQueryClient()
const { setItem, getItem, removeItem } = AsyncStorage;

interface User {
    token: unknown;
}

export const useAuth = () => {
    const getTokenAsycnStorge = async () => {
        const token = await getItem(authKey.ACCESS_TOKEN);
        return token ?? null;
    };

    const fetchData: () => Promise<User> = async () => {
        const token = await AuthFireBase()?.currentUser?.getIdToken();
        return {
            token,
        };
    };

    const logout = async () => {
        try {
            await AuthFireBase().signOut();
            await removeItem(authKey.ACCESS_TOKEN);
            queryClient.setQueryData(authKey.AUTH, { token: null });
        } catch (error) {
            logger.error('error', error);
        }
    };

    // const login = async (confirmCode: string, otp: string) => {};

    const getAuth = () =>
        useQuery(authKey.AUTH, fetchData, {
            initialData: {
                token: getTokenAsycnStorge(),
            },
        });
    return { getAuth, logout };
};

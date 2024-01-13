import AsyncStorage from '@react-native-async-storage/async-storage';

export const storage = {
    set: async (key: string, value: any): Promise<void> => {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('Erro ao adicionar item ao storage:', error);
        }
    },
    remove: async (key: string): Promise<void> => {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.error('Erro ao remover item do storage:', error);
        }
    },
    get: async (key: string): Promise<any | null> => {
        try {
            const value = await AsyncStorage.getItem(key);

            if (value !== null) {
                return JSON.parse(value);
            }
            return null;
        } catch (error) {
            console.error('Erro ao obter item do storage:', error);
            return null;
        }
    }
};

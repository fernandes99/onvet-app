import { NativeSyntheticEvent, TextInputSubmitEditingEventData, View } from 'react-native';

import { Typo } from '@/components/Typograph';
import { theme } from '@/styles/theme';
import Toast from 'react-native-root-toast';
import axios from 'axios';
import { MaskedTextInput } from 'react-native-mask-text';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading } from '@/store/reducers/global';
import { IUser } from '@/types/user';

interface WelcomeContentAddressCEPProps {
    updateAddress: (addressData: IUser['address']) => void;
}

interface IResponseGetCEPAddress {
    bairro: string;
    cep: string;
    localidade: string;
    logradouro: string;
    uf: string;
}

const WelcomeContentAddressCEP = ({ updateAddress }: WelcomeContentAddressCEPProps) => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const fetchAddressCEP = (cep: string) => {
        dispatch(setLoading({ show: true }));

        return axios
            .get(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => {
                if (res.data?.erro) {
                    throw new Error('CEP não encontrado');
                }

                return res.data as IResponseGetCEPAddress;
            })
            .catch(() => {
                Toast.show('CEP não encontrado', {
                    duration: Toast.durations.LONG,
                    position: Toast.positions.BOTTOM,
                    shadow: true,
                    animation: true,
                    hideOnPress: true
                });

                return null;
            })
            .finally(() => {
                dispatch(setLoading({ show: false }));
            });
    };

    const handleSubmitCepAddress = async () => {
        if (inputValue.length >= 9) {
            const data = await fetchAddressCEP(inputValue.replace(/\D/g, ''));

            if (!data) return;

            updateAddress({
                cep: data.cep,
                street: data.logradouro,
                city: data.localidade,
                neighborhood: data.bairro,
                uf: data.uf,
                number: '',
                complement: ''
            });
        }
    };

    useEffect(() => {
        if (inputValue.length >= 9) {
            handleSubmitCepAddress();
        }
    }, [inputValue]);

    return (
        <View className='mb-8 w-full gap-8'>
            <Typo.H3>Para buscar os veterinários próximo a você, insira seu CEP a baixo:</Typo.H3>
            <MaskedTextInput
                onChangeText={setInputValue}
                onSubmitEditing={handleSubmitCepAddress}
                autoFocus
                placeholder='Insira o CEP aqui'
                keyboardType='numeric'
                mask='999-99999'
                placeholderTextColor={theme.colors['neutral-300']}
                style={{
                    fontSize: 24,
                    borderRadius: 12
                }}
            />
        </View>
    );
};

export default WelcomeContentAddressCEP;

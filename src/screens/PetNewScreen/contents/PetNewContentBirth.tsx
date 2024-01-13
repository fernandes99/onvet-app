import { TouchableOpacity, View } from 'react-native';
import { Typo } from '@/components/Typograph';
import { INewPetData } from '../types';
import { MaskedTextInput } from 'react-native-mask-text';
import { useState } from 'react';
import { theme } from '@/styles/theme';
import { RadioButton } from '@/components/RadioButton';

const INITIAL_BIRTH_DATA = {
    date: null,
    isMoreOneYear: null,
    isApproximated: false
};

interface PetNewContentBirthProps {
    onChangeBirth: (birth: INewPetData['birth']) => void;
}

const PetNewContentBirth = ({ onChangeBirth }: PetNewContentBirthProps) => {
    const [currentBirthData, setCurrentBirthData] =
        useState<INewPetData['birth']>(INITIAL_BIRTH_DATA);

    const onChangeBirthData = (data: INewPetData['birth']) => {
        setCurrentBirthData(data);
        onChangeBirth(data);
    };

    return (
        <View className='gap-4'>
            <Typo.P1 weight='medium'>Lembra a data de nascimento?</Typo.P1>
            <View className='rounded-lg bg-primary-100  p-4'>
                <Typo.S1 weight='medium' className='text-primary-900'>
                    A data aproximada nos ajuda a indicar serviços de acordo com a idade do pet
                </Typo.S1>
            </View>
            <MaskedTextInput
                onPressIn={() => {
                    if (currentBirthData.isApproximated) {
                        onChangeBirthData({
                            isApproximated: false,
                            isMoreOneYear: null,
                            date: ''
                        });
                    }
                }}
                onChangeText={(value) => {
                    if (value) {
                        onChangeBirthData({
                            isApproximated: false,
                            isMoreOneYear: null,
                            date: value
                        });
                    }
                }}
                value={currentBirthData.date || ''}
                placeholder='00/00/0000'
                keyboardType='numeric'
                mask='99/99/9999'
                placeholderTextColor={theme.colors['neutral-300']}
                autoFocus
                style={{
                    fontSize: 24,
                    marginVertical: 12,
                    opacity: currentBirthData.isApproximated ? 0.5 : 1
                }}
            />

            <TouchableOpacity
                className='flex-row gap-2'
                onPress={() => {
                    onChangeBirthData({
                        date: null,
                        isApproximated: true,
                        isMoreOneYear: false
                    });
                }}
            >
                <RadioButton
                    selected={
                        !currentBirthData.isMoreOneYear && currentBirthData.isMoreOneYear !== null
                    }
                />
                <Typo.P1>
                    Não sei, mas tem <Typo.P1 weight='semiBold'>menos</Typo.P1> de um ano
                </Typo.P1>
            </TouchableOpacity>
            <TouchableOpacity
                className='flex-row gap-2'
                onPress={() => {
                    onChangeBirthData({
                        date: null,
                        isApproximated: true,
                        isMoreOneYear: true
                    });
                }}
            >
                <RadioButton
                    selected={
                        !!currentBirthData.isMoreOneYear && currentBirthData.isMoreOneYear !== null
                    }
                />
                <Typo.P1>
                    Não sei, mas tem <Typo.P1 weight='semiBold'>mais</Typo.P1> de um ano
                </Typo.P1>
            </TouchableOpacity>
        </View>
    );
};

export default PetNewContentBirth;

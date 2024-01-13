import { View } from 'react-native';
import { Typo } from '@/components/Typograph';
import { Input } from '@/components/Input';
import { INewPetData } from '../types';
import { useState } from 'react';

interface PetNewContentWeightProps {
    onChangeWeight: (weight: INewPetData['weight']) => void;
}

const PetNewContentWeight = ({ onChangeWeight }: PetNewContentWeightProps) => {
    const [currentWeightValue, setCurrentWeightValue] = useState('');

    return (
        <View className='gap-4'>
            <Typo.P1 weight='medium'>Qual é o peso?</Typo.P1>
            <View className='bg-primary-100 rounded-lg  p-4'>
                <Typo.S1 weight='medium' className='text-primary-900'>
                    Se não souber, informe um peso aproximado. Assim, conseguimos indicar serviços
                    ideais.
                </Typo.S1>
            </View>
            <View className='flex-row items-end'>
                <Input
                    autoFocus
                    placeholder='ex: 10kg'
                    maxLength={3}
                    keyboardType='numeric'
                    className={currentWeightValue ? 'w-14' : 'w-20'}
                    onChangeText={(value) => {
                        onChangeWeight(Number(value.replace(/\D/g, '')));
                        setCurrentWeightValue(value);
                    }}
                />

                {currentWeightValue && <Typo.P2 className='text-neutral-500'>Kg</Typo.P2>}
            </View>
        </View>
    );
};

export default PetNewContentWeight;

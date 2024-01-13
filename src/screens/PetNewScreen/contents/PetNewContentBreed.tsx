import { View } from 'react-native';
import { Typo } from '@/components/Typograph';
import { Input } from '@/components/Input';
import { INewPetData } from '../types';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { breeds } from '@/constants/breeds';

interface PetNewContentBreedProps {
    onChangeBreed: (breed: INewPetData['breed']) => void;
}

const PetNewContentBreed = ({ onChangeBreed }: PetNewContentBreedProps) => {
    const [currentSelectedBreed, setCurrentSelectedBreed] = useState('');

    return (
        <View className='gap-4'>
            <Typo.P1 weight='medium'>Qual é a raça?</Typo.P1>
            <Picker
                selectedValue={currentSelectedBreed}
                onValueChange={(value) => {
                    setCurrentSelectedBreed(value);
                    onChangeBreed(value);
                }}
            >
                <Picker.Item value='' label='Escolha a raça' />
                {breeds.dog.map((breed) => (
                    <Picker.Item key={breed} label={breed} value={breed} />
                ))}
            </Picker>
        </View>
    );
};

export default PetNewContentBreed;

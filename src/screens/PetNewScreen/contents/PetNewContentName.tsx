import { View } from 'react-native';
import { Typo } from '@/components/Typograph';
import { Input } from '@/components/Input';
import { INewPetData } from '../types';

interface PetNewContentNameProps {
    onChangeName: (name: INewPetData['name']) => void;
}

const PetNewContentName = ({ onChangeName }: PetNewContentNameProps) => {
    return (
        <View className='gap-4'>
            <Typo.P1 weight='medium'>Legal! Qual é o nome?</Typo.P1>
            <Input
                autoFocus
                placeholder='Digite o nome'
                maxLength={50}
                onChangeText={onChangeName}
            />
        </View>
    );
};

export default PetNewContentName;

import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Typo } from '@/components/Typograph';
import { RadioButton } from '@/components/RadioButton';
import { INewPetData } from '../types';
import { Button } from '@/components/Button';

interface PetNewContentGenderProps {
    onChangeGender: (gender: INewPetData['gender']) => void;
    onChangeCastrated: (castrated: INewPetData['castrated']) => void;
}

const PetNewContentGender = ({ onChangeGender, onChangeCastrated }: PetNewContentGenderProps) => {
    const [currentGender, setCurrentGender] = useState<INewPetData['gender'] | null>(null);
    const [currentCastrated, setCurrentCastrated] = useState<INewPetData['castrated'] | null>(null);

    return (
        <View className='gap-8'>
            <View className='gap-4'>
                <Typo.P1 weight='medium'>Certo! É macho ou fêmea?</Typo.P1>
                <TouchableOpacity
                    className='flex-row gap-2'
                    onPress={() => {
                        onChangeGender('male');
                        setCurrentGender('male');
                    }}
                >
                    <RadioButton selected={currentGender === 'male'} />
                    <Typo.P1>Macho</Typo.P1>
                </TouchableOpacity>
                <TouchableOpacity
                    className='flex-row gap-2'
                    onPress={() => {
                        setCurrentGender('female');
                        onChangeGender('female');
                    }}
                >
                    <RadioButton selected={currentGender === 'female'} />
                    <Typo.P1>Fêmea</Typo.P1>
                </TouchableOpacity>
            </View>
            <View className='gap-4'>
                <Typo.P1 weight='medium'>Já passou por castração?</Typo.P1>
                <View className='flex-row gap-4'>
                    <Button
                        className='flex-1'
                        variant={
                            currentCastrated && currentCastrated !== null ? 'primary' : 'ghost'
                        }
                        onPress={() => {
                            setCurrentCastrated(true);
                            onChangeCastrated(true);
                        }}
                    >
                        <Typo.P1
                            className={`${
                                currentCastrated && currentCastrated !== null
                                    ? 'text-white'
                                    : 'text-neutral-500'
                            }`}
                        >
                            Sim
                        </Typo.P1>
                    </Button>
                    <Button
                        className='flex-1'
                        variant={
                            !currentCastrated && currentCastrated !== null ? 'primary' : 'ghost'
                        }
                        onPress={() => {
                            setCurrentCastrated(false);
                            onChangeCastrated(false);
                        }}
                    >
                        <Typo.P1
                            className={`${
                                !currentCastrated && currentCastrated !== null
                                    ? 'text-white'
                                    : 'text-neutral-500'
                            }`}
                        >
                            Não
                        </Typo.P1>
                    </Button>
                </View>
            </View>
        </View>
    );
};

export default PetNewContentGender;

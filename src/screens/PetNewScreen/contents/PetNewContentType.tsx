import { Button } from '@/components/Button';
import { Typo } from '@/components/Typograph';
import { View } from 'react-native';
import { IPetOption } from '../types';
import { useState } from 'react';

const PET_OPTIONS = [
    {
        slug: 'dog',
        name: 'Cachorro'
    },
    {
        slug: 'cat',
        name: 'Gato'
    }
] as IPetOption[];

interface PetNewContentTypeProps {
    onSelectType: (type: IPetOption['slug']) => void;
}

const PetNewContentType = ({ onSelectType }: PetNewContentTypeProps) => {
    const [indexOptionSelected, setIndexOptionSelected] = useState<number>(-1);

    return (
        <View className='gap-4'>
            <Typo.P1 weight='medium'>Conta para gente, qual seu pet?</Typo.P1>
            {PET_OPTIONS.map((option, index) => (
                <Button
                    key={option.slug}
                    variant={indexOptionSelected === index ? 'primary' : 'ghost'}
                    onPress={() => {
                        onSelectType(option.slug);
                        setIndexOptionSelected(index);
                    }}
                >
                    <Typo.P1
                        className={`${
                            indexOptionSelected === index ? 'text-primary-500' : 'text-neutral-500'
                        }`}
                    >
                        {option.name}
                    </Typo.P1>
                </Button>
            ))}
        </View>
    );
};

export default PetNewContentType;

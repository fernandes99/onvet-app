import { View } from 'react-native';
import { Typo } from '@/components/Typograph';
import { INewPetData } from '../types';
import { AvatarCatIllustration } from '@/assets/svgs/illustrations/AvatarCatIllustration';
import { AvatarDogIllustration } from '@/assets/svgs/illustrations/AvatarDogIllustration';
import { Button } from '@/components/Button';

const PetNewContentResume = ({
    name,
    type,
    gender,
    castrated,
    breed,
    birth,
    weight
}: INewPetData) => {
    const Field = ({ title, value }: { title: string; value: string }) => (
        <View className='flex-row items-center justify-between'>
            <Typo.P1 className='text-neutral-400'>{title}</Typo.P1>
            <Typo.P1 weight='medium'>{value}</Typo.P1>
        </View>
    );

    return (
        <View className='gap-4'>
            <View className='mb-4 items-center'>
                {type === 'cat' && <AvatarCatIllustration size={120} />}
                {type === 'dog' && <AvatarDogIllustration size={120} />}

                <Button variant='primary' className='border-0'>
                    <Typo.P2 weight='medium' className='text-primary-500'>
                        Alterar foto
                    </Typo.P2>
                </Button>
            </View>

            <View className='mb-4'>
                <Typo.P2 className='text-neutral-400'>Adoramos conhecer seu pet!</Typo.P2>
                <Typo.P1 weight='medium'>Todos os dados estão corretos?</Typo.P1>
            </View>

            <Field title='Name' value={name} />
            <Field title='Pet' value={type === 'cat' ? 'Gato' : 'Cachorro'} />
            <Field title='Sexo' value={gender === 'female' ? 'Femêa' : 'Macho'} />
            <Field title='Castrado' value={castrated ? 'Sim' : 'Não'} />
            <Field title='Raça' value={breed} />
            <Field title='Data de nascimento' value={birth.date || '-'} />
            <Field title='Peso' value={`${weight}kg`} />
        </View>
    );
};

export default PetNewContentResume;

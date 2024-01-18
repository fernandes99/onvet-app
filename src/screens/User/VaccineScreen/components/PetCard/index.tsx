import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { AvatarCatIllustration } from '@/assets/svgs/illustrations/AvatarCatIllustration';
import { AvatarDogIllustration } from '@/assets/svgs/illustrations/AvatarDogIllustration';
import { Typo } from '@/components/Typograph';
import { IScheduleVaccine } from '@/store/reducers/schedule';
import { IUserPet } from '@/types/user';
import { theme } from '@/styles/theme';

interface PetCardProps extends TouchableOpacityProps {
    vaccines: IScheduleVaccine[];
    pet: IUserPet;
}

export const PetCard = ({ vaccines, pet, ...rest }: PetCardProps) => {
    const vaccinesSeleted = vaccines.filter((vaccine) => vaccine.petId === pet.id);

    return (
        <TouchableOpacity
            className='mb-6 flex-row items-center gap-6 rounded-xl border border-neutral-100 p-4'
            {...rest}
        >
            {pet.type === 'cat' && <AvatarCatIllustration size={64} />}
            {pet.type === 'dog' && <AvatarDogIllustration size={64} />}

            <View>
                <Typo.H5 weight='medium'>{pet.name}</Typo.H5>
                <Typo.P1 className='text-neutral-400'>{pet.breed}</Typo.P1>

                {!!vaccinesSeleted?.length && (
                    <View className='mb-2 mt-1 rounded-full bg-primary-100 px-3 py-1'>
                        <Typo.P2 weight='medium' className='text-primary-600'>
                            {vaccinesSeleted.length}{' '}
                            {vaccinesSeleted.length === 1
                                ? 'Vacina selecionada'
                                : 'Vacinas selecionadas'}
                        </Typo.P2>
                    </View>
                )}
            </View>

            <View className='absolute right-4 top-1/2'>
                <Entypo name='chevron-small-right' size={24} color={theme.colors['primary-500']} />
            </View>
        </TouchableOpacity>
    );
};

import { View } from 'react-native';

import { Typo } from '@/components/Typograph';
import { IUser } from '@/types/user';

interface WelcomeContentAddressResumeProps {
    address: IUser['address'];
}

const WelcomeContentAddressResume = ({ address }: WelcomeContentAddressResumeProps) => {
    const Field = ({ title, value }: { title: string; value: string }) => (
        <View className='flex-row items-center justify-between'>
            <Typo.P1 className='text-neutral-400'>{title}</Typo.P1>
            <Typo.P1 weight='medium'>{value}</Typo.P1>
        </View>
    );

    return (
        <View className='mb-8 w-full gap-8'>
            <Typo.H3>Certo, confirme seu endereço:</Typo.H3>
            <View className='w-full gap-4'>
                <Field title='Rua' value={address.street} />
                <Field title='Número' value={address.number} />
                <Field title='Bairro' value={address.neighborhood} />
                {address.complement && <Field title='Complemento' value={address.complement} />}
                <Field title='Cidade' value={address.city} />
                <Field title='UF' value={address.uf} />
                <Field title='CEP' value={address.cep} />
            </View>
        </View>
    );
};

export default WelcomeContentAddressResume;

import { Container } from '@/components/Container';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Input } from '@/components/Input';
import { Typo } from '@/components/Typograph';
import { ScrollView, Touchable, TouchableOpacity, View } from 'react-native';
import { theme } from '@/styles/theme';
import { SERVICES_LIST, SPECIALTIES_LIST } from '@/constants/specialties';

interface PropsTag {
    title: string;
    selected: boolean;
}

const Tag = ({ selected, title }: PropsTag) => (
    <TouchableOpacity
        className={`flex-row items-center justify-center gap-2 rounded-full border px-4 py-1 ${selected ? 'border-secondary-500' : 'border-neutral-100'}`}
    >
        <Typo.P2
            weight='medium'
            className={`${selected ? 'text-secondary-500' : 'text-neutral-400'} pt-[1px]`}
        >
            {title}
        </Typo.P2>
    </TouchableOpacity>
);

const EditServiceContent = () => {
    return (
        <ScrollView className='flex-1'>
            <Container className='gap-6 p-6'>
                <View>
                    <Typo.P1 weight='medium'>Você atende quais tipos de pets?</Typo.P1>
                    <Typo.P2 className='text-neutral-400'>
                        Selecione os pets que você atende:
                    </Typo.P2>
                    <View className='my-4 flex-1 flex-row flex-wrap gap-2'>
                        <Tag title='Cachorro' selected={true} />
                        <Tag title='Gato' selected={false} />
                        <Tag title='Outro' selected={false} />
                    </View>
                </View>

                <View>
                    <Typo.P1 weight='medium'>Quais são suas especialidades?</Typo.P1>
                    <Typo.P2 className='text-neutral-400'>Informe sua especialidade:</Typo.P2>
                    <View className='my-4 flex-1 flex-row flex-wrap gap-2'>
                        {SPECIALTIES_LIST.map((specialty) => (
                            <Tag
                                key={specialty.slug}
                                title={specialty.name}
                                selected={Math.random() > 0.5}
                            />
                        ))}
                    </View>
                </View>

                <View>
                    <Typo.P1 weight='medium'>Quais serviços você atende?</Typo.P1>
                    <Typo.P2 className='text-neutral-400'>
                        Informe quais serviços você quer atender:
                    </Typo.P2>
                    <View className='my-4 flex-1 flex-row flex-wrap gap-2'>
                        {SERVICES_LIST.map((service) => (
                            <Tag
                                key={service.slug}
                                title={service.name}
                                selected={Math.random() > 0.5}
                            />
                        ))}
                    </View>
                </View>

                <View>
                    <Typo.P1 weight='medium'>Quais vacinas você aplica?</Typo.P1>
                    <Typo.P2 className='text-neutral-400'>
                        Selecione as vacinas que você aplica:
                    </Typo.P2>
                </View>
            </Container>
        </ScrollView>
    );
};

export default EditServiceContent;

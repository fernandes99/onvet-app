import { Container } from '@/components/Container';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Input } from '@/components/Input';
import { Typo } from '@/components/Typograph';
import { ScrollView, Touchable, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { theme } from '@/styles/theme';
import { SERVICES_LIST, SPECIALTIES_LIST } from '@/constants/specialties';
import { PET } from '@/constants/pets';
import { useState } from 'react';
import CustomModal from '@/components/Modal';

interface PropsTag extends TouchableOpacityProps {
    title: string;
    selected: boolean;
}

const Tag = ({ selected, title, ...rest }: PropsTag) => (
    <TouchableOpacity
        className={`flex-row items-center justify-center gap-2 rounded-full border px-4 py-1 ${selected ? 'border-secondary-500' : 'border-neutral-100'}`}
        {...rest}
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
    const [typesSelected, setTypesSelected] = useState<string[]>([]);
    const [specialtiesSelected, setSpecialtiesSelected] = useState<string[]>([]);
    const [servicesSelected, setServicesSelected] = useState<string[]>([]);

    const handleSelectPetType = (type: string) => {
        setTypesSelected(
            typesSelected.includes(type)
                ? typesSelected.filter((t) => t !== type)
                : [...typesSelected, type]
        );
    };

    const handleSelectSpecialty = (specialty: string) => {
        setSpecialtiesSelected(
            specialtiesSelected.includes(specialty)
                ? specialtiesSelected.filter((s) => s !== specialty)
                : [...specialtiesSelected, specialty]
        );
    };

    const handleSelectService = (service: string) => {
        setServicesSelected(
            servicesSelected.includes(service)
                ? servicesSelected.filter((s) => s !== service)
                : [...servicesSelected, service]
        );
    };

    return (
        <ScrollView className='flex-1'>
            <Container className='gap-6 p-6'>
                <View>
                    <Typo.P1 weight='medium'>Você atende quais tipos de pets?</Typo.P1>
                    <Typo.P2 className='text-neutral-400'>
                        Selecione os pets que você atende:
                    </Typo.P2>
                    <View className='my-4 flex-1 flex-row flex-wrap gap-2'>
                        {PET.TYPES.map((type) => (
                            <Tag
                                key={type.id}
                                title={type.name}
                                selected={typesSelected.includes(type.slug)}
                                onPress={() => handleSelectPetType(type.slug)}
                            />
                        ))}
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
                                selected={specialtiesSelected.includes(specialty.slug)}
                                onPress={() => handleSelectSpecialty(specialty.slug)}
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
                                selected={servicesSelected.includes(service.slug)}
                                onPress={() => handleSelectService(service.slug)}
                            />
                        ))}
                    </View>
                </View>

                <View>
                    <Typo.P1 weight='medium'>Quais vacinas você aplica?</Typo.P1>
                    <Typo.P2 className='text-neutral-400'>
                        Selecione as vacinas que você aplica:
                    </Typo.P2>
                    {servicesSelected.includes('vacinas') && <View></View>}
                </View>
            </Container>

            <CustomModal
                visible={servicesSelected.includes('vacinas')}
                onRequestClose={() => setServicesSelected([])}
                height='h-1/2'
            >
                <View className='gap-4'>
                    <Typo.P1 weight='medium'>Quanto você cobra por aplicação de vacina?</Typo.P1>
                    <View className='flex-row'>
                        <Typo.H3 className='mr-1'>R$</Typo.H3>
                        <Input
                            keyboardType='numeric'
                            placeholder='25,00'
                            className='mr-2 mt-[2px]'
                            autoFocus
                            onSubmitEditing={() => {}}
                        />
                    </View>
                </View>
            </CustomModal>
        </ScrollView>
    );
};

export default EditServiceContent;

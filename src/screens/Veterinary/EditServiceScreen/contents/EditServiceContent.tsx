import { Container } from '@/components/Container';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import { Input } from '@/components/Input';
import { Typo } from '@/components/Typograph';
import { ScrollView, Touchable, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { theme } from '@/styles/theme';
import { SERVICES_LIST, SPECIALTIES_LIST } from '@/constants/specialties';
import { PET } from '@/constants/pets';
import { useState } from 'react';
import CustomModal from '@/components/Modal';
import { Button } from '@/components/Button';
import { MaskedTextInput } from 'react-native-mask-text';
import Checkbox from '@/components/Checkbox';
import { VETERINARY } from '@/constants/veterinary';
import format from '@/utils/scripts/format';
import { VACCINES } from '@/constants/vaccines';
import EditVaccineContent from './EditVaccineContent';

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
    const [typesSelected, setTypesSelected] = useState<string[]>(
        VETERINARY.pet_type_specialties.map((pet) => pet.slug)
    );
    const [specialtiesSelected, setSpecialtiesSelected] = useState<string[]>([]);
    const [servicesSelected, setServicesSelected] = useState<string>('');

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
        setServicesSelected(service);
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
                    <View className='mt-4 gap-2'>
                        {SERVICES_LIST.map((service) => {
                            const vaccineService = VETERINARY.services.find(
                                (s) => s.slug === 'vacinas'
                            );
                            const appointmentService = VETERINARY.services.find(
                                (s) => s.slug === 'consultas'
                            );
                            const castrationService = VETERINARY.services.find(
                                (s) => s.slug === 'castracao'
                            );

                            return (
                                <View key={service.slug}>
                                    {service.slug === 'vacinas' && (
                                        <TouchableOpacity
                                            className='rounded-lg border border-neutral-100 px-4 py-3'
                                            onPress={() => handleSelectService(service.slug)}
                                        >
                                            <View className='flex-row justify-between'>
                                                <View className='gap-2'>
                                                    <View className='flex-row items-center gap-2'>
                                                        <FontAwesome5
                                                            name='syringe'
                                                            size={16}
                                                            color={theme.colors['neutral-700']}
                                                        />
                                                        <Typo.P1>{service.name}</Typo.P1>
                                                    </View>

                                                    {!!VETERINARY.vaccines?.length && (
                                                        <View className='items-center rounded-full bg-primary-100 px-3 py-1'>
                                                            <Typo.P2
                                                                weight='medium'
                                                                className='text-primary-600'
                                                            >
                                                                {VETERINARY.vaccines.length}{' '}
                                                                {VETERINARY.vaccines.length === 1
                                                                    ? 'vacina selecionada'
                                                                    : 'vacinas selecionadas'}
                                                            </Typo.P2>
                                                        </View>
                                                    )}

                                                    {!!vaccineService ? (
                                                        <View className='rounded-full bg-green-100 px-3 py-1'>
                                                            <Typo.P2
                                                                weight='medium'
                                                                className='text-green-700'
                                                            >
                                                                {format.money(vaccineService.price)}{' '}
                                                                por aplicação
                                                            </Typo.P2>
                                                        </View>
                                                    ) : (
                                                        <View className='rounded-full bg-neutral-100 px-3 py-1'>
                                                            <Typo.P2
                                                                weight='medium'
                                                                className='text-neutral-700'
                                                            >
                                                                Não atende
                                                            </Typo.P2>
                                                        </View>
                                                    )}
                                                </View>
                                                <View className='items-center justify-center'>
                                                    <Entypo
                                                        name='chevron-small-right'
                                                        size={24}
                                                        color={theme.colors['secondary-500']}
                                                    />
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )}

                                    {service.slug === 'consultas' && (
                                        <TouchableOpacity className='rounded-lg border border-neutral-100 px-4 py-3'>
                                            <View className='flex-row justify-between'>
                                                <View className='gap-2'>
                                                    <View className='flex-row items-center gap-2'>
                                                        <MaterialIcons
                                                            name='schedule'
                                                            size={20}
                                                            color={theme.colors['neutral-700']}
                                                        />
                                                        <Typo.P1>{service.name}</Typo.P1>
                                                    </View>

                                                    {!!appointmentService ? (
                                                        <View className='rounded-full bg-green-100 px-3 py-1'>
                                                            <Typo.P2
                                                                weight='medium'
                                                                className='text-green-700'
                                                            >
                                                                {format.money(
                                                                    appointmentService.price
                                                                )}{' '}
                                                                por consulta
                                                            </Typo.P2>
                                                        </View>
                                                    ) : (
                                                        <View className='rounded-full bg-neutral-100 px-3 py-1'>
                                                            <Typo.P2
                                                                weight='medium'
                                                                className='text-neutral-700'
                                                            >
                                                                Não atende
                                                            </Typo.P2>
                                                        </View>
                                                    )}
                                                </View>
                                                <View className='items-center justify-center'>
                                                    <Entypo
                                                        name='chevron-small-right'
                                                        size={24}
                                                        color={theme.colors['secondary-500']}
                                                    />
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )}

                                    {service.slug === 'castracao' && (
                                        <TouchableOpacity className='rounded-lg border border-neutral-100 px-4 py-3'>
                                            <View className='flex-row justify-between'>
                                                <View className='gap-2'>
                                                    <View className='flex-row items-center gap-2'>
                                                        <Feather
                                                            name='scissors'
                                                            size={20}
                                                            color={theme.colors['neutral-700']}
                                                        />
                                                        <Typo.P1>{service.name}</Typo.P1>
                                                    </View>

                                                    {!!castrationService ? (
                                                        <View className='rounded-full bg-green-100 px-3 py-1'>
                                                            <Typo.P2
                                                                weight='medium'
                                                                className='text-green-700'
                                                            >
                                                                {format.money(
                                                                    castrationService.price
                                                                )}{' '}
                                                                por castração
                                                            </Typo.P2>
                                                        </View>
                                                    ) : (
                                                        <View className='rounded-full bg-neutral-100 px-3 py-1'>
                                                            <Typo.P2
                                                                weight='medium'
                                                                className='text-neutral-700'
                                                            >
                                                                Não atende
                                                            </Typo.P2>
                                                        </View>
                                                    )}
                                                </View>
                                                <View className='items-center justify-center'>
                                                    <Entypo
                                                        name='chevron-small-right'
                                                        size={24}
                                                        color={theme.colors['secondary-500']}
                                                    />
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )}
                                </View>
                            );
                        })}
                    </View>
                </View>
            </Container>

            <CustomModal
                visible={servicesSelected === 'vacinas'}
                onRequestClose={() => handleSelectService('')}
                height='h-full'
            >
                <EditVaccineContent />
            </CustomModal>
        </ScrollView>
    );
};

export default EditServiceContent;

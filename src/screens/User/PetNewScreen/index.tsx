import { useEffect, useMemo, useState } from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import { router, useNavigation } from 'expo-router';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { TopBar } from '@/components/TopBar';
import { Typo } from '@/components/Typograph';
import { INewPetData, IPetOption } from './types';
import PetNewContentType from './contents/PetNewContentType';
import PetNewContentName from './contents/PetNewContentName';
import PetNewContentGender from './contents/PetNewContentGender';
import PetNewContentBreed from './contents/PetNewContentBreed';
import PetNewContentBirth from './contents/PetNewContentBirth';
import PetNewContentWeight from './contents/PetNewContentWeight';
import PetNewContentResume from './contents/PetNewContentResume';
import { storage } from '@/utils/scripts/storage';
import { useDispatch } from 'react-redux';
import { setLoading } from '@/store/reducers/global';

const INITIAL_STATE_PET_DATA = {
    id: '',
    type: null,
    name: '',
    gender: null,
    castrated: false,
    breed: '',
    birth: {
        date: null,
        isMoreOneYear: null,
        isApproximated: false
    },
    weight: 0,
    photo: ''
};

const STEPS = [
    'PetNewContentType',
    'PetNewContentName',
    'PetNewContentGender',
    'PetNewContentBreed',
    'PetNewContentBirth',
    'PetNewContentWeight',
    'PetNewContentResume'
];

export default function PetNewScreen() {
    const dispatch = useDispatch();
    const [petData, setPetData] = useState<INewPetData>(INITIAL_STATE_PET_DATA);
    const [currentStep, setCurrentStep] = useState(0);
    const [disabledButton, setDisabledButton] = useState(false);
    const currentPercent = useMemo(() => (currentStep / (STEPS.length - 1)) * 100, [currentStep]);
    const isLastStep = useMemo(() => currentStep === STEPS.length - 1, [currentStep]);

    const savePet = async () => {
        dispatch(
            setLoading({
                show: true,
                message: 'Cadastrando pet...'
            })
        );

        const currentPets = await storage.get('user_pets');

        storage
            .set(
                'user_pets',
                currentPets ? [...currentPets, { ...petData, id: `${Math.random()}` }] : [petData]
            )
            .then(() => {
                Alert.alert('Cadastro realizado', 'O pet foi cadastrado.', [
                    { text: 'Fechar', onPress: () => router.replace('/user/main/pet/') }
                ]);
            })
            .catch(() => {
                Alert.alert('Erro ao cadastrar o pet', 'Tente novamente mais tarde.', [
                    { text: 'Fechar', onPress: () => router.replace('/user/main/pet/') }
                ]);
            })
            .finally(() => dispatch(setLoading({ show: false })));
    };

    const goToNextStep = () => {
        if (isLastStep) {
            savePet();
            return;
        }

        setDisabledButton(true);
        setCurrentStep((prevState) => ++prevState);
    };

    const goToPreviousStep = () => {
        if (!currentStep) {
            router.back();
        }

        setDisabledButton(true);
        setCurrentStep((prevState) => --prevState);
    };

    const onSelectType = (type: INewPetData['type']) => {
        setPetData({ ...petData, type });
        setDisabledButton(false);
    };

    const onChangeName = (name: INewPetData['name']) => {
        setPetData({ ...petData, name });
        setDisabledButton(!name);
    };

    const onChangeGender = (gender: INewPetData['gender']) => {
        setPetData({ ...petData, gender });
        setDisabledButton(false);
    };

    const onChangeCastrated = (castrated: INewPetData['castrated']) => {
        setPetData({ ...petData, castrated });
    };

    const onChangeBreed = (breed: INewPetData['breed']) => {
        setPetData({ ...petData, breed });
        setDisabledButton(!breed);
    };

    const onChangeBirth = (birth: INewPetData['birth']) => {
        setPetData({ ...petData, birth });
        setDisabledButton(!birth.isApproximated && birth.date!.length < 10);
    };

    const onChangeWeight = (weight: INewPetData['weight']) => {
        setPetData({ ...petData, weight });
        setDisabledButton(!weight);
    };

    useEffect(() => {
        if (isLastStep) {
            setDisabledButton(false);
        }
    }, [isLastStep]);

    return (
        <Container>
            <TopBar title='Cadastrar novo pet' onBack={goToPreviousStep} />
            <ScrollView className='flex-1 bg-slate-50 p-6'>
                {STEPS[currentStep] === 'PetNewContentType' && (
                    <PetNewContentType onSelectType={onSelectType} />
                )}

                {STEPS[currentStep] === 'PetNewContentName' && (
                    <PetNewContentName onChangeName={onChangeName} />
                )}

                {STEPS[currentStep] === 'PetNewContentGender' && (
                    <PetNewContentGender
                        onChangeGender={onChangeGender}
                        onChangeCastrated={onChangeCastrated}
                    />
                )}

                {STEPS[currentStep] === 'PetNewContentBreed' && (
                    <PetNewContentBreed onChangeBreed={onChangeBreed} />
                )}

                {STEPS[currentStep] === 'PetNewContentBirth' && (
                    <PetNewContentBirth onChangeBirth={onChangeBirth} />
                )}

                {STEPS[currentStep] === 'PetNewContentWeight' && (
                    <PetNewContentWeight onChangeWeight={onChangeWeight} />
                )}

                {STEPS[currentStep] === 'PetNewContentResume' && (
                    <PetNewContentResume {...petData} />
                )}
            </ScrollView>
            <View className='bg-neutral-100'>
                <View
                    className='bg-primary-500'
                    style={[styles.dynamicWidth, { width: `${currentPercent}%` }]}
                />
            </View>
            <View className='bg-white p-6'>
                <Button
                    onPress={goToNextStep}
                    disabled={disabledButton}
                    aria-disabled={disabledButton}
                >
                    <Typo.P1
                        weight='medium'
                        className={disabledButton ? 'text-neutral-500' : 'text-primary-500'}
                    >
                        {isLastStep ? 'Salvar' : 'Continuar'}
                    </Typo.P1>
                </Button>
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    dynamicWidth: {
        transitionProperty: 'width',
        transitionDuration: '0.5s',
        height: 2
    }
});

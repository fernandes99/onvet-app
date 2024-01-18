import { useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import { router } from 'expo-router';
import { useSelector } from 'react-redux';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { TopBar } from '@/components/TopBar';
import { Typo } from '@/components/Typograph';
import { RootState } from '@/store';

import VaccineAddContent from './contents/VaccineAddContent';
import VaccineDateContent from './contents/VaccineDateContent';
import { setSchedule } from '@/store/reducers/schedule';
import { storage } from '@/utils/scripts/storage';
import { IUser } from '@/types/user';
import { useDispatch } from 'react-redux';

const STEPS = ['VaccineAddContent', 'VaccineDateContent'];

export default function VaccineScreen() {
    const dispatch = useDispatch();
    const schedule = useSelector((state: RootState) => state.schedule);
    const vaccines = schedule.vaccines;

    const [currentStep, setCurrentStep] = useState(0);
    const [disabledButton, setDisabledButton] = useState(true);

    const isLastStep = useMemo(() => {
        return STEPS.length - 1 === currentStep;
    }, [currentStep]);

    const goToNextStep = () => {
        if (isLastStep) {
            return router.push('/user/vets/');
        }

        setCurrentStep((prevState) => ++prevState);
    };

    const goToPreviousStep = () => {
        if (!currentStep) {
            router.back();
        }

        setCurrentStep((prevState) => --prevState);
    };

    useEffect(() => {
        if (!vaccines.length || (isLastStep && !schedule.dateTime)) {
            return setDisabledButton(true);
        }

        setDisabledButton(false);
    }, [currentStep, schedule]);

    useEffect(() => {
        storage.get('user_address').then((res: IUser['address']) => {
            dispatch(setSchedule({ ...schedule, userAddress: res, type: 'vaccine' }));
        });
    }, []);

    return (
        <Container>
            <TopBar title='Vacinas' onBack={goToPreviousStep} />

            {STEPS[currentStep] === 'VaccineAddContent' && (
                <VaccineAddContent vaccines={vaccines} />
            )}

            {STEPS[currentStep] === 'VaccineDateContent' && <VaccineDateContent />}

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
                        {isLastStep ? 'Procurar veterinário' : 'Continuar'}
                    </Typo.P1>
                </Button>
            </View>
        </Container>
    );
}

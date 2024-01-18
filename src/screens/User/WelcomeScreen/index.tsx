import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { router } from 'expo-router';
import { Alert, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

import { Logotype } from '@/assets/svgs/Logotype';
import { Container } from '@/components/Container';
import { Typo } from '@/components/Typograph';
import { Button } from '@/components/Button';
import { theme } from '@/styles/theme';
import { storage } from '@/utils/scripts/storage';
import { setLoading } from '@/store/reducers/global';
import { IUser } from '@/types/user';

import WelcomeContentInitial from './contents/WelcomeContentInitial';
import WelcomeContentInfo from './contents/WelcomeContentInfo';
import WelcomeContentAddressCEP from './contents/WelcomeContentAddressCEP';
import WelcomeContentAddressNumber from './contents/WelcomeContentAddressNumber';
import WelcomeContentAddressComplement from './contents/WelcomeContentAddressComplement';
import WelcomeContentAddressResume from './contents/WelcomeContentAddressResume';

const INITIAL_ADDRESS_STATE = {
    cep: '',
    street: '',
    neighborhood: '',
    uf: '',
    city: '',
    number: '',
    complement: ''
} as IUser['address'];

export default function WelcomeScreen() {
    const dispatch = useDispatch();
    const [address, setAddress] = useState(INITIAL_ADDRESS_STATE);
    const [steps, setSteps] = useState([
        {
            name: 'ContentInitial',
            element: () => <WelcomeContentInitial />,
            actived: true
        },
        {
            name: 'ContentInfo',
            element: () => <WelcomeContentInfo />,
            actived: false
        },
        {
            name: 'ContentAddressCEP',
            element: () => <WelcomeContentAddressCEP updateAddress={setAddress} />,
            actived: false
        },
        {
            name: 'ContentAddressNumber',
            element: () => (
                <WelcomeContentAddressNumber
                    updateNumberAddress={(value) =>
                        setAddress((prev) => {
                            return { ...prev, number: value };
                        })
                    }
                />
            ),
            actived: false
        },
        {
            name: 'ContentAddressComplement',
            element: () => (
                <WelcomeContentAddressComplement
                    updateComplementAddress={(value) =>
                        setAddress((prev) => {
                            return { ...prev, complement: value };
                        })
                    }
                />
            ),
            actived: false
        },
        {
            name: 'ContentAddressResume',
            element: ({ address }: { address: IUser['address'] }) => (
                <WelcomeContentAddressResume address={address} />
            ),
            actived: false
        }
    ]);

    const currentStep = useMemo(() => steps.find((step) => step.actived) || steps[0], [steps]);
    const CurrentContentScreen = currentStep.element;

    const disabledButton = useMemo(() => {
        if (currentStep.name === 'ContentAddressCEP') {
            return !address.cep;
        }

        if (currentStep.name === 'ContentAddressNumber') {
            return !address.number;
        }

        return false;
    }, [address, currentStep]);

    const saveAddress = () => {
        dispatch(setLoading({ show: true }));

        storage
            .set('user_address', address)
            .then(() => router.replace('/user/main/home/'))
            .catch(() => {
                Alert.alert('Erro ao criar o endereço', 'Tente novamente mais tarde.', [
                    { text: 'Fechar' }
                ]);
            })
            .finally(() => dispatch(setLoading({ show: false })));
    };

    const goToNextStep = () => {
        const currentStepIndex = steps.findIndex((step) => step.actived);

        if (currentStepIndex >= steps.length - 1) {
            return saveAddress();
        }

        setSteps((prevState) =>
            prevState.map((step, index) => {
                if (step.actived) step.actived = false;
                if (index - 1 === currentStepIndex) step.actived = true;

                return step;
            })
        );
    };

    const goToPreviousStep = () => {
        const currentStepIndex = steps.findIndex((step) => step.actived);

        if (currentStepIndex === 0) {
            return router.replace('/login/');
        }

        setSteps((prevState) =>
            prevState.map((step, index) => {
                if (step.actived) step.actived = false;
                if (index + 1 === currentStepIndex) step.actived = true;

                return step;
            })
        );
    };

    return (
        <Container className='bg-secondary-900'>
            {currentStep.name !== 'ContentAddressResume' && (
                <View className='flex-1 items-center justify-center'>
                    <Logotype />
                </View>
            )}

            <View
                className={`w-full bg-white p-6 ${
                    currentStep.name === 'ContentAddressResume' && 'flex-1'
                }`}
            >
                <Button variant='icon' className='-ml-4 mb-4' onPress={goToPreviousStep}>
                    <AntDesign name='arrowleft' size={32} color={theme.colors['neutral-200']} />
                </Button>
                <CurrentContentScreen address={address} />
            </View>

            <View className='w-full border-t border-neutral-100 bg-white p-6'>
                {currentStep.name === 'ContentAddressResume' && (
                    <Button onPress={goToNextStep} variant='secondary' className='mb-4'>
                        <Typo.P1 className='text-neutral-500'>Alterar endereço</Typo.P1>
                    </Button>
                )}
                <Button
                    onPress={goToNextStep}
                    disabled={disabledButton}
                    aria-disabled={disabledButton}
                >
                    <Typo.P1 className={disabledButton ? 'text-neutral-500' : 'text-primary-500'}>
                        {currentStep.name === 'ContentAddressResume'
                            ? 'Certo, vamos lá!'
                            : 'Continuar'}
                    </Typo.P1>
                </Button>
            </View>
        </Container>
    );
}

import { Button } from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import CustomModal from '@/components/Modal';
import { Typo } from '@/components/Typograph';
import { VACCINES } from '@/constants/vaccines';
import { IVaccine, setVaccines } from '@/store/reducers/vaccines';
import { useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

interface AddVaccineModalProps {
    visible: boolean;
    onClose: () => void;
    currentVaccines: IVaccine[];
    petId: string;
}

const AddVaccineModal = ({ visible, currentVaccines, petId, onClose }: AddVaccineModalProps) => {
    const dispatch = useDispatch();
    const currentPetVaccines = currentVaccines.filter((vaccine) => vaccine.petId === petId);
    const [checkedVaccines, setCheckedVaccines] = useState<string[]>(
        currentPetVaccines.map((vaccine) => vaccine.id)
    );

    const onSave = () => {
        const selectedVaccines = VACCINES.filter((vaccine) =>
            checkedVaccines.includes(vaccine.id)
        ).map((vaccine) => {
            return {
                ...vaccine,
                petId
            };
        });

        dispatch(
            setVaccines([
                ...currentVaccines.filter((vaccine) => vaccine.petId !== petId),
                ...selectedVaccines
            ])
        );
        onClose();
    };

    const handleCheckVaccine = (vaccineId: string) => {
        setCheckedVaccines((prevState) => {
            if (prevState.includes(vaccineId)) {
                return prevState.filter((id) => id !== vaccineId);
            }

            return [...prevState, vaccineId];
        });
    };

    return (
        <CustomModal visible={visible} onRequestClose={onClose} animationType='slide' transparent>
            <Typo.P1 weight='medium' className='mb-6'>
                Selecione as vacinas
            </Typo.P1>

            <ScrollView className='flex-1'>
                {VACCINES.map((vaccine, index) => (
                    <TouchableOpacity
                        key={vaccine.id}
                        className={`w-full flex-row  items-center gap-2 p-2 ${
                            index % 2 === 0 ? 'bg-neutral-100' : ''
                        }`}
                        onPress={() => handleCheckVaccine(vaccine.id)}
                    >
                        <Checkbox checked={checkedVaccines.includes(vaccine.id)} />
                        <Typo.P1 className='flex-1 flex-wrap'>{vaccine.name}</Typo.P1>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <Button onPress={onSave}>
                <Typo.P1 weight='medium' className='text-primary-500'>
                    Salvar
                </Typo.P1>
            </Button>
        </CustomModal>
    );
};

export default AddVaccineModal;

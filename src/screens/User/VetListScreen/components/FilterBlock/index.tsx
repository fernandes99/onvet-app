import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { theme } from '@/styles/theme';

interface FilterBlockProps {
    onFilter: () => void;
}

const FilterBlock = ({ onFilter }: FilterBlockProps) => {
    return (
        <View className='px-6 pt-6'>
            <View className='flex-row items-center gap-2'>
                <View className='flex-1'>
                    <Input
                        className='h-16 border border-neutral-100 bg-white px-6 pt-1 font-Poppins_400Regular text-lg placeholder:text-neutral-200'
                        placeholder='Busque por palavra chave'
                    />
                </View>
                <Button variant='icon' className='h-16 w-16 border border-neutral-100 bg-white'>
                    <MaterialIcons
                        name='filter-alt'
                        size={24}
                        color={theme.colors['primary-500']}
                    />
                </Button>
            </View>
        </View>
    );
};

export default FilterBlock;

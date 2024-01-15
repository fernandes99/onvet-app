import { Container } from '@/components/Container';
import ScheduleContent from './contents/ScheduleCotent';

export default function ScheduleScreen() {
    // const [loading, setLoading] = useState(true);
    // const [address, setAddress] = useState<IUser['address'] | null>(null);
    // const goToBack = () => {
    //     router.back();
    // };

    // useEffect(() => {
    //     storage
    //         .get('user_address')
    //         .then((res: IUser['address']) => res && setAddress(res))
    //         .finally(() => setLoading(false));
    // }, []);

    return (
        <Container>
            <ScheduleContent />
        </Container>
    );
}

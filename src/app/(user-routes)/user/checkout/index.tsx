import CheckoutScreen from '@/screens/User/CheckoutScreen';

export default function CheckoutRoute() {
    // useEffect(() => {
    //     (async () => {
    //         await initStripe({
    //             publishableKey:
    //                 'pk_test_51K7hEkKV5JWVlcwgECkQ5Nyx1mKZYNXaEJulruUx7pFbzOteBFzBcQ2NI01A0xYLiW8rdApeMDQSzkFggXwuzObC00b4LxwaSU',
    //             merchantIdentifier: 'com.fernandes99.onvetapp'
    //         });
    //     })();
    // }, []);

    return (
        // <StripeProvider publishableKey='pk_test_51K7hEkKV5JWVlcwgECkQ5Nyx1mKZYNXaEJulruUx7pFbzOteBFzBcQ2NI01A0xYLiW8rdApeMDQSzkFggXwuzObC00b4LxwaSU'>
        <CheckoutScreen />
        // </StripeProvider>
    );
}

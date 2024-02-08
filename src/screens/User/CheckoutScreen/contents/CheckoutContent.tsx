import { View } from 'react-native';

const CheckoutContent = () => {
    // const [card, setCard] = useState<Details>();

    // const fetchPaymentIntentClientSecret = async ({
    //     amount,
    //     gateway
    // }: {
    //     amount: number;
    //     gateway: any;
    // }) => {
    //     return {
    //         paymentIntent: 'pi_3OgptMKV5JWVlcwg1CH5hTmL_secret_0FA1QNhXDACQllJlxEJcXHZim',
    //         ephemeralKey:
    //             'ek_test_YWNjdF8xSzdoRWtLVjVKV1ZsY3dnLExFeWg2WUdpV3pIMjA2VVg3VmxjS1NCYldJbTViMlc_00HFlmYFp4',
    //         customer: 'cus_PVrc0OKNDfs2IG',
    //         publishableKey:
    //             'pk_test_51K7hEkKV5JWVlcwgECkQ5Nyx1mKZYNXaEJulruUx7pFbzOteBFzBcQ2NI01A0xYLiW8rdApeMDQSzkFggXwuzObC00b4LxwaSU'
    //     };

    // const res = await fetch(`${API_URL}`, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         Accept: 'application/json'
    //     },
    //     body: JSON.stringify({
    //         amount: (amount * 100).toString(),
    //         currency: 'EUR',
    //         gateway: gateway
    //     })
    // })
    //     .then((response) => response.json())
    //     .then((data) => data)
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // return res?.client_secret;
    // };

    // const initializePaymentSheet = async () => {
    //     const options = {
    //         paymentIntent: 'pi_3OgptMKV5JWVlcwg1CH5hTmL_secret_0FA1QNhXDACQllJlxEJcXHZim',
    //         ephemeralKey:
    //             'ek_test_YWNjdF8xSzdoRWtLVjVKV1ZsY3dnLExFeWg2WUdpV3pIMjA2VVg3VmxjS1NCYldJbTViMlc_00HFlmYFp4',
    //         customer: 'cus_PVrc0OKNDfs2IG',
    //         publishableKey:
    //             'pk_test_51K7hEkKV5JWVlcwgECkQ5Nyx1mKZYNXaEJulruUx7pFbzOteBFzBcQ2NI01A0xYLiW8rdApeMDQSzkFggXwuzObC00b4LxwaSU'
    //     };

    //     const { error } = await initPaymentSheet({
    //         merchantDisplayName: 'Example, Inc.',
    //         customerId: options.customer,
    //         customerEphemeralKeySecret: options.ephemeralKey,
    //         paymentIntentClientSecret: options.paymentIntent,
    //         allowsDelayedPaymentMethods: true,
    //         defaultBillingDetails: {
    //             name: 'Jane Doe'
    //         }
    //     });

    //     if (!error) {
    //         console.log('Loading');
    //     }
    // };

    // const openPaymentSheet = async () => {
    //     const { error } = await presentPaymentSheet();

    //     if (error) {
    //         Alert.alert(`Error code: ${error.code}`, error.message);
    //     } else {
    //         Alert.alert('Success', 'Your order is confirmed!');
    //     }
    // };

    // useEffect(() => {
    //     initializePaymentSheet();
    // }, []);

    return (
        <View>
            {/* <Button variant='primary' onPress={openPaymentSheet}>
                <Typo.P1>Checkout</Typo.P1>
            </Button> */}
            {/* <Typo.H1>Teste</Typo.H1>
            {/* <CardForm
                placeholders={{
                    number: 'XXXX XXXX XXXX XXXX'
                }}
            /> */}
            {/* <CardField
                postalCodeEnabled={false}
                placeholders={{
                    number: 'XXXX XXXX XXXX XXXX'
                }}
                cardStyle={{
                    backgroundColor: '#FFFFFF',
                    textColor: '#000000'
                }}
                style={{
                    width: '100%',
                    height: 50,
                    marginVertical: 30
                }}
                onCardChange={(cardDetails) => {
                    console.log('On Card Change', cardDetails);
                    setCard(cardDetails);
                }}
                onFocus={(focusedField) => {
                    console.log('focusField', focusedField);
                }}
            /> */}
        </View>
    );
};

export default CheckoutContent;

export const SCHEDULE_ITEMS = [
    {
        id: '123',
        user: {
            id: '456',
            name: 'John',
            surname: 'Doe',
            address: {
                cep: '12345-678',
                street: 'Rua Exemplo',
                neighborhood: 'Bairro Teste',
                uf: 'SP',
                city: 'São Paulo',
                number: '123',
                complement: 'Apto 456'
            }
        },
        pets: [
            {
                id: '1',
                type: 'dog',
                name: 'Buddy',
                gender: 'male',
                castrated: true,
                breed: 'Golden Retriever',
                birth: {
                    date: '2020-01-15',
                    isMoreOneYear: true,
                    isApproximated: false
                },
                weight: 25.5,
                photo: 'url/to/dog/photo1.jpg'
            },
            {
                id: '2',
                type: 'cat',
                name: 'Whiskers',
                gender: 'female',
                castrated: false,
                breed: 'Siamese',
                birth: {
                    date: '2021-05-20',
                    isMoreOneYear: false,
                    isApproximated: false
                },
                weight: 8.2,
                photo: 'url/to/cat/photo2.jpg'
            }
        ],
        dateTime: new Date('2024-02-01T10:00:00'),
        status: 'scheduled'
    },
    // Additional Schedule Items
    {
        id: '124',
        user: {
            id: '457',
            name: 'Jane',
            surname: 'Smith',
            address: {
                cep: '54321-876',
                street: 'Avenida Sample',
                neighborhood: 'Test Neighborhood',
                uf: 'RJ',
                city: 'Rio de Janeiro',
                number: '456',
                complement: 'Apto 789'
            }
        },
        pets: [
            {
                id: '3',
                type: 'bird',
                name: 'Sunny',
                gender: 'male',
                breed: 'Parakeet',
                birth: {
                    date: '2019-08-10',
                    isMoreOneYear: true,
                    isApproximated: false
                },
                weight: 0.5,
                photo: 'url/to/bird/photo3.jpg'
            }
        ],
        dateTime: new Date('2024-02-05T14:30:00'),
        status: 'scheduled'
    },
    {
        id: '125',
        user: {
            id: '458',
            name: 'Alice',
            surname: 'Johnson',
            address: {
                cep: '98765-432',
                street: 'Example Street',
                neighborhood: 'Testville',
                uf: 'MG',
                city: 'Belo Horizonte',
                number: '789',
                complement: 'Apto 101'
            }
        },
        pets: [
            {
                id: '4',
                type: 'rabbit',
                name: 'Cotton',
                gender: 'female',
                breed: 'Holland Lop',
                birth: {
                    date: '2022-03-08',
                    isMoreOneYear: false,
                    isApproximated: false
                },
                weight: 3.2,
                photo: 'url/to/rabbit/photo4.jpg'
            }
        ],
        dateTime: new Date('2024-02-10T15:45:00'),
        status: 'scheduled'
    },
    {
        id: '126',
        user: {
            id: '459',
            name: 'Michael',
            surname: 'Williams',
            address: {
                cep: '13579-246',
                street: 'Demo Avenue',
                neighborhood: 'Sample Town',
                uf: 'PR',
                city: 'Curitiba',
                number: '1010',
                complement: 'Suite 205'
            }
        },
        pets: [
            {
                id: '5',
                type: 'snake',
                name: 'Slinky',
                gender: 'male',
                breed: 'Ball Python',
                birth: {
                    date: '2019-11-25',
                    isMoreOneYear: true,
                    isApproximated: false
                },
                weight: 2.5,
                photo: 'url/to/snake/photo5.jpg'
            }
        ],
        dateTime: new Date('2024-02-15T12:00:00'),
        status: 'scheduled'
    }
];

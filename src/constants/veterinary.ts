const VETERINARY = {
    id: '',
    name: '',
    surname: '',
    phone: '',
    email: '',
    experience_time: '',
    profile_image: '',
    about: '',
    crmv: '',
    experience: [],
    graduation: [],
    specialties: [
        {
            name: 'Cardiologia',
            slug: 'cardiologia'
        },
        {
            name: 'Dermatologia',
            slug: 'dermatologia'
        },
        {
            name: 'Clínica geral',
            slug: 'clinica-geral'
        }
    ],
    pet_type_specialties: [
        {
            name: 'Cachorro',
            slug: 'dog'
        },
        {
            name: 'Gato',
            slug: 'cat'
        }
    ],
    services: [
        {
            name: 'Vacinas',
            slug: 'vacinas',
            price: 1099
        },
        {
            name: 'Consultas',
            slug: 'consultas',
            price: 4999
        },
        {
            name: 'Exames laboratoriais',
            slug: 'exames-laboratoriais',
            price: 1999
        }
    ],
    vaccines: [
        {
            id: 'a1b2c3d4e5',
            name: 'Vacina V8',
            slug: 'v8',
            price: 2099
        },
        {
            id: 'f6g7h8i9j',
            name: 'Vacina V10',
            slug: 'v10',
            price: 4999
        },
        {
            id: 'k1l2m3n4o5',
            name: 'Vacina Antirrábica',
            slug: 'antirrabica',
            price: 2000
        },
        {
            id: 'p6q7r8s9t',
            name: 'Vacina contra Cinomose',
            slug: 'cinomose',
            price: 1500
        }
    ],
    address: {
        cep: '',
        street: '',
        neighborhood: '',
        uf: '',
        city: '',
        number: '',
        coordinates: {
            lat: '',
            lng: ''
        }
    },
    schedule: {} // TODO
};

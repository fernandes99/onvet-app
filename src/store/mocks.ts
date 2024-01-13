const CHECKOUT_MOCK = {
    payment: { method: 'pix' },
    schedule: {
        dateTime: '2024-01-13T22:16:00.000Z',
        type: 'appointment',
        userAddress: null,
        vaccines: [
            {
                id: 'k1l2m3n4o5',
                name: 'Vacina Antirrábica',
                slug: 'antirrabica',
                petId: '0.4630624174887832'
            },
            {
                id: 'u1v2w3x4y5',
                name: 'Vacina contra Parvovirose',
                slug: 'parvovirose',
                petId: '0.4630624174887832'
            }
        ]
    },
    summary: { totalPrice: 129.99 },
    veterinary: {
        id: '0',
        name: 'Soraya',
        surname: 'Brito da Silva',
        about: 'Atuo de forma preventiva nos cuidados da saúde de cães e gatos. Experiência de mais de anos na área veterinária e 8 anos exclusiva como médica veterinária de pequenos animais domésticos.',
        profileImage:
            'https://christinaanimalhospital.com/uploads/SiteAssets/386/images/staff/811147.jpg',
        graduation: ['Medicina veterinária UNINASSAU', 'Pós-graduanda em Acupuntura'],
        experience: ['ASSVET', 'Instituto Mamíferos Aquáticos', 'CEPENE/ICMBio'],
        crmv: '33823',
        price: 129.99,
        specialties: [
            { name: 'Cardiologia', slug: 'cardiologia' },
            { name: 'Dermatologia', slug: 'dermatologia' },
            { name: 'Clínica geral', slug: 'clinica-geral' },
            { name: 'Nutrição e Nutrologia', slug: 'nutricaoo-e-nutrologia' }
        ],
        services: [
            { name: 'Vacinas', slug: 'vacinas' },
            { name: 'Consultas', slug: 'consultas' },
            { name: 'Exames laboratoriais', slug: 'exames-laboratoriais' }
        ],
        opening_hours: [
            {
                week_day: { slug: 'domingo', title: 'Domingo' },
                opening_at: '00:00',
                closing_at: '00:00',
                opened: false
            },
            {
                week_day: { slug: 'segunda-feira', title: 'Segunda Feira' },
                opening_at: '09:00',
                closing_at: '17:00',
                opened: true
            },
            {
                week_day: { slug: 'terca-feira', title: 'Terça Feira' },
                opening_at: '09:00',
                closing_at: '17:00',
                opened: true
            },
            {
                week_day: { slug: 'quarta-feira', title: 'Quarta Feira' },
                opening_at: '09:00',
                closing_at: '17:00',
                opened: true
            },
            {
                week_day: { slug: 'quinta-feira', title: 'Quinta Feira' },
                opening_at: '09:00',
                closing_at: '17:00',
                opened: true
            },
            {
                week_day: { slug: 'sexta-feira', title: 'Sexta Feira' },
                opening_at: '09:00',
                closing_at: '17:00',
                opened: true
            },
            {
                week_day: { slug: 'sabado', title: 'Sábado' },
                opening_at: '10:00',
                closing_at: '16:00',
                opened: true
            }
        ]
    },
    messageToVeterinary: ''
};

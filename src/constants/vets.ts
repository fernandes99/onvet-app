// Telemedicina aprovada:
// https://portalvet.royalcanin.com.br/saude-e-nutricao/negocios/telemedicina-veterinaria/#:~:text=No%20Brasil%2C%20a%20telemedicina%20veterin%C3%A1ria,est%C3%A3o%20inclu%C3%ADdas%20as%20seguintes%20modalidades.

import { IVeterinary } from '@/types/veterinary';

export const VET_LIST = [
    {
        id: '0',
        name: 'Soraya',
        surname: 'Brito da Silva',
        about: 'Atuo de forma preventiva nos cuidados da saúde de cães e gatos. Experiência de mais de anos na área veterinária e 8 anos exclusiva como médica veterinária de pequenos animais domésticos.',
        profile_image:
            'https://christinaanimalhospital.com/uploads/SiteAssets/386/images/staff/811147.jpg',
        graduation: ['Medicina veterinária UNINASSAU', 'Pós-graduanda em Acupuntura'],
        experience: ['ASSVET', 'Instituto Mamíferos Aquáticos', 'CEPENE/ICMBio'],
        crmv: '33823',
        price: 129.99,
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
            },
            {
                name: 'Nutrição e Nutrologia',
                slug: 'nutricaoo-e-nutrologia'
            }
        ],
        services: [
            {
                name: 'Vacinas',
                slug: 'vacinas'
            },
            {
                name: 'Consultas',
                slug: 'consultas'
            },
            {
                name: 'Exames laboratoriais',
                slug: 'exames-laboratoriais'
            }
        ],
        opening_hours: [
            {
                week_day: {
                    slug: 'domingo',
                    title: 'Domingo'
                },
                opening_at: '00:00',
                closing_at: '00:00',
                opened: false
            },
            {
                week_day: {
                    slug: 'segunda-feira',
                    title: 'Segunda Feira'
                },
                opening_at: '09:00',
                closing_at: '17:00',
                opened: true
            },
            {
                week_day: {
                    slug: 'terca-feira',
                    title: 'Terça Feira'
                },
                opening_at: '09:00',
                closing_at: '17:00',
                opened: true
            },
            {
                week_day: {
                    slug: 'quarta-feira',
                    title: 'Quarta Feira'
                },
                opening_at: '09:00',
                closing_at: '17:00',
                opened: true
            },
            {
                week_day: {
                    slug: 'quinta-feira',
                    title: 'Quinta Feira'
                },
                opening_at: '09:00',
                closing_at: '17:00',
                opened: true
            },
            {
                week_day: {
                    slug: 'sexta-feira',
                    title: 'Sexta Feira'
                },
                opening_at: '09:00',
                closing_at: '17:00',
                opened: true
            },
            {
                week_day: {
                    slug: 'sabado',
                    title: 'Sábado'
                },
                opening_at: '10:00',
                closing_at: '16:00',
                opened: true
            }
        ]
    },
    {
        id: '1',
        name: 'Lucas',
        surname: 'Almeida Souza',
        about: 'Médico Veterinário com experiência em animais de grande porte. Especializado em reprodução animal.',
        profile_image: 'https://d2b0sstunfvm0v.cloudfront.net/image-54648-340.jpg',
        graduation: ['Medicina veterinária UFMG', 'Pós-graduação em Reprodução Animal'],
        experience: ['Fazenda São João', 'Haras do Vale'],
        crmv: '33823',
        price: 70.0,
        specialties: [
            {
                name: 'Reprodução Animal',
                slug: 'reproducao-animal'
            },
            {
                name: 'Clínica de Grandes Animais',
                slug: 'clinica-de-grandes-animais'
            }
        ],
        services: [
            {
                name: 'Consulta de Reprodução',
                slug: 'consulta-de-reproducao'
            },
            {
                name: 'Atendimento Emergencial',
                slug: 'atendimento-emergencial'
            }
        ],
        opening_hours: [
            {
                week_day: {
                    slug: 'segunda-feira',
                    title: 'Segunda Feira'
                },
                opening_at: '08:00',
                closing_at: '18:00',
                opened: true
            },
            {
                week_day: {
                    slug: 'terca-feira',
                    title: 'Terça Feira'
                },
                opening_at: '08:00',
                closing_at: '18:00',
                opened: true
            },
            {
                week_day: {
                    slug: 'quarta-feira',
                    title: 'Quarta Feira'
                },
                opening_at: '08:00',
                closing_at: '18:00',
                opened: true
            },
            {
                week_day: {
                    slug: 'quinta-feira',
                    title: 'Quinta Feira'
                },
                opening_at: '08:00',
                closing_at: '18:00',
                opened: true
            },
            {
                week_day: {
                    slug: 'sexta-feira',
                    title: 'Sexta Feira'
                },
                opening_at: '08:00',
                closing_at: '18:00',
                opened: true
            }
        ]
    },
    {
        id: '2',
        name: 'Camila',
        surname: 'Oliveira Lima',
        about: 'Médica veterinária apaixonada por animais de estimação. Atuo na prevenção e tratamento de diversas doenças em cães e gatos.',
        profile_image:
            'https://img.freepik.com/fotos-gratis/mulher-sorridente-posando-enquanto-segura-seu-adoravel-cao_23-2148567080.jpg?w=826&t=st=1705153279~exp=1705153879~hmac=025f0da9f72bc7cf269c07881c53a167cd3f626cb1acf0eb393f42481c0b1d33',
        graduation: [
            'Medicina veterinária UFRJ',
            'Especialização em Medicina Interna de Pequenos Animais'
        ],
        experience: ['Clínica Veterinária Amigo Fiel', 'Hospital Veterinário PetCare'],
        crmv: '33823',
        price: 79.99,
        specialties: [
            {
                name: 'Medicina Interna',
                slug: 'medicina-interna'
            },
            {
                name: 'Odontologia Veterinária',
                slug: 'odontologia-veterinaria'
            }
        ],
        services: [
            {
                name: 'Exames de Sangue',
                slug: 'exames-de-sangue'
            },
            {
                name: 'Cirurgias Odontológicas',
                slug: 'cirurgias-odontologicas'
            }
        ],
        opening_hours: [
            {
                week_day: {
                    slug: 'segunda-feira',
                    title: 'Segunda Feira'
                },
                opening_at: '10:00',
                closing_at: '19:00',
                opened: true
            },
            {
                week_day: {
                    slug: 'terca-feira',
                    title: 'Terça Feira'
                },
                opening_at: '10:00',
                closing_at: '19:00',
                opened: true
            },
            {
                week_day: {
                    slug: 'quarta-feira',
                    title: 'Quarta Feira'
                },
                opening_at: '10:00',
                closing_at: '19:00',
                opened: true
            },
            {
                week_day: {
                    slug: 'quinta-feira',
                    title: 'Quinta Feira'
                },
                opening_at: '10:00',
                closing_at: '19:00',
                opened: true
            },
            {
                week_day: {
                    slug: 'sexta-feira',
                    title: 'Sexta Feira'
                },
                opening_at: '10:00',
                closing_at: '19:00',
                opened: true
            }
        ]
    },
    {
        id: '3',
        name: 'Rafael',
        surname: 'Ferreira Santos',
        about: 'Veterinário dedicado a cuidar do bem-estar de animais silvestres. Trabalho em parques ecológicos e projetos de conservação da fauna.',
        profile_image:
            'https://smartcdn.gprod.postmedia.digital/v1/dynamic_resize/sws_path/suns-prod-images/1298009582831_ORIGINAL.jpg?quality=90&size=650x&strip=all&w=288&h=216&sig=qB0HgQ_wXf7yKiYPTdZKQw',
        graduation: ['Medicina veterinária UFPR', 'Mestrado em Conservação de Animais Silvestres'],
        experience: ['Parque Nacional da Serra dos Órgãos', 'Projeto Tamar'],
        crmv: '33823',
        price: 80.0,
        specialties: [
            {
                name: 'Animais Silvestres',
                slug: 'animais-silvestres'
            },
            {
                name: 'Conservação da Fauna',
                slug: 'conservacao-da-fauna'
            }
        ],
        services: [
            {
                name: 'Consulta para Animais Silvestres',
                slug: 'consulta-animais-silvestres'
            },
            {
                name: 'Reabilitação de Fauna',
                slug: 'reabilitacao-fauna'
            }
        ],
        opening_hours: [
            {
                week_day: {
                    slug: 'segunda-feira',
                    title: 'Segunda Feira'
                },
                opening_at: '08:00',
                closing_at: '16:00',
                opened: true
            },
            {
                week_day: {
                    slug: 'quarta-feira',
                    title: 'Quarta Feira'
                },
                opening_at: '08:00',
                closing_at: '16:00',
                opened: true
            },
            {
                week_day: {
                    slug: 'sexta-feira',
                    title: 'Sexta Feira'
                },
                opening_at: '08:00',
                closing_at: '16:00',
                opened: true
            }
        ]
    },
    {
        id: '4',
        name: 'Carolina',
        surname: 'Santos Oliveira',
        about: 'Especializada em animais exóticos e de estimação não convencionais. Trabalho com répteis, aves e pequenos mamíferos.',
        profile_image: 'https://www.lida-vets.co.uk/news/wp-content/uploads/2020/05/paige.jpg',
        graduation: ['Medicina veterinária UFRGS', 'Especialização em Animais Exóticos'],
        experience: ['Clínica ExoPet', 'Zoológico Municipal'],
        crmv: '33823',
        price: 89.99,
        specialties: [
            {
                name: 'Animais Exóticos',
                slug: 'animais-exoticos'
            },
            {
                name: 'Aves',
                slug: 'aves'
            }
        ],
        services: [
            {
                name: 'Consulta para Répteis',
                slug: 'consulta-repteis'
            },
            {
                name: 'Avaliação de Aves de Estimação',
                slug: 'avaliacao-aves-estimacao'
            }
        ],
        opening_hours: [
            {
                week_day: {
                    slug: 'terca-feira',
                    title: 'Terça Feira'
                },
                opening_at: '11:00',
                closing_at: '20:00',
                opened: true
            },
            {
                week_day: {
                    slug: 'quinta-feira',
                    title: 'Quinta Feira'
                },
                opening_at: '11:00',
                closing_at: '20:00',
                opened: true
            },
            {
                week_day: {
                    slug: 'sabado',
                    title: 'Sábado'
                },
                opening_at: '09:00',
                closing_at: '15:00',
                opened: true
            }
        ]
    }
] as Readonly<IVeterinary>[];

const SERVICES_LIST = [
    {
        name: 'Vacinas',
        slug: 'vacinas'
    },
    {
        name: 'Consultas',
        slug: 'consultas'
    },
    {
        name: 'Exames laboratoriais',
        slug: 'exames-laboratoriais'
    }
];

const SPECIALTIES_LIST = [
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
    },
    {
        name: 'Nutrição e Nutrologia',
        slug: 'nutricao-e-nutrologia'
    },
    {
        name: 'Outros',
        slug: 'outros'
    }
];

const WEEK_DAYS = [
    {
        slug: 'domingo',
        title: 'Domingo'
    },
    {
        slug: 'segunda-feira',
        title: 'Segunda'
    },
    {
        slug: 'terca-feira',
        title: 'Terça'
    },
    {
        slug: 'quarta-feira',
        title: 'Quarta'
    },
    {
        slug: 'quinta-feira',
        title: 'Quinta'
    },
    {
        slug: 'sexta-feira',
        title: 'Sexta'
    },
    {
        slug: 'sabado',
        title: 'Sábado'
    }
];

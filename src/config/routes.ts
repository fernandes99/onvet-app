const routes = {
    checkout: '/checkout/',
    location: '/location',
    login: '/login/',
    welcome: '/welcome',
    vets: '/vets',
    main: {
        home: '/main/home',
        pet: '/main/pet',
        profile: '/main/profile',
        schedule: '/main/schedule'
    },
    vaccines: '/vaccines',
    vetProfile: (vetId: string) => `/vets/${vetId}`
};

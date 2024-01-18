const routes = {
    checkout: '/checkout/',
    location: '/location',
    login: '/login/',
    welcome: '/welcome',
    vets: '/vets',
    main: {
        home: '/user/main/home',
        pet: '/user/main/pet',
        profile: '/user/main/profile',
        schedule: '/user/main/schedule'
    },
    vaccines: '/vaccines',
    vetProfile: (vetId: string) => `/vets/${vetId}`
};

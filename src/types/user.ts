export interface IUser {
    pets: IUserPet[];
    address: IUserAddress;
}

export interface IUserPet {
    id: string;
    type: 'cat' | 'dog';
    name: string;
    gender: 'male' | 'female';
    castrated: boolean;
    breed: string;
    birth: {
        date: string;
        isMoreOneYear: boolean;
        isApproximated: boolean;
    };
    weight: number;
    photo: string;
}

interface IUserAddress {
    cep: string;
    street: string;
    neighborhood: string;
    uf: string;
    city: string;
    number: string;
    complement: string;
}

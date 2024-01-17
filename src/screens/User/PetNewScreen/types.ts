export interface INewPetData {
    id: string;
    type: 'cat' | 'dog' | null;
    name: string;
    gender: 'male' | 'female' | null;
    castrated: boolean;
    breed: string;
    birth: {
        date: string | null;
        isMoreOneYear: boolean | null;
        isApproximated: boolean;
    };
    weight: number;
    photo: string;
}

export interface IPetOption {
    slug: INewPetData['type'];
    name: string;
}

interface ISpecialty {
    name: string;
    slug: string;
}

interface IService {
    name: string;
    slug: string;
}

interface IWeekDay {
    slug: string;
    title: string;
}

interface IOpeningHour {
    week_day: IWeekDay;
    opening_at: string;
    closing_at: string;
    opened: boolean;
}

export interface IVeterinary {
    id: string;
    name: string;
    surname: string;
    about: string;
    profileImage: string;
    crmv: string;
    price: number;
    graduation: string[];
    experience: string[];
    specialties: ISpecialty[];
    services: IService[];
    opening_hours: IOpeningHour[];
}

const format = {
    money: (value: number) => {
        const formatter = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });

        return formatter.format(value);
    },
    time: (value: Date | string, format: 'HH:MM:SS' | 'HHhMM') => {
        if (typeof value === 'string') {
            value = new Date(value);
        }

        if (format === 'HHhMM') {
            const hours = value.getHours() < 10 ? `0${value.getHours()}` : value.getHours();
            const minutes = value.getMinutes() < 10 ? `0${value.getMinutes()}` : value.getMinutes();

            return `${hours}h${minutes}`;
        }

        return value.toLocaleTimeString();
    },
    acronym: (value: string) => {
        if (!value.length) return '';

        const words = value.split(' ');
        const limit = words?.length;
        const acronyms = words ? `${words[0][0]}:${words[limit][0]}` : value[0];

        return acronyms;
    }
};

export default format;

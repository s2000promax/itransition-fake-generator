export type UserField = keyof User & ('fullName' | 'address' | 'phone');

export interface User {
    index: number;
    id: string;
    fullName: string;
    address: string;
    phone: string;
}

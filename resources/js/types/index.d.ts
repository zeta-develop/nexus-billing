import { Config } from 'ziggy-js';

export interface User {
    id: number;
    username: string;
    name: string;
    lastname: string;
    email: string;
    email_verified_at?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
};

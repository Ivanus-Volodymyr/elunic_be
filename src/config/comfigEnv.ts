import { config } from 'dotenv';
void config();

interface IConfigEnv {
    secret_key:string;
    secret_key_refresh: string;
}
export const configEnv: IConfigEnv = {
    secret_key: process.env.SECRET_KEY || 'test',
    secret_key_refresh: process.env.SECRET_KEY_REFRESH || 'test',
};

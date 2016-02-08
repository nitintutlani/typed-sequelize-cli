declare module "sequelize-cli" {
    import {QueryInterface, Sequelize} from 'sequelize';

    export type Migration = (query?: QueryInterface, connection?: Sequelize, done?: () => void) => Promise<void> | void;

    export type Seeder = (query?: QueryInterface, connection?: Sequelize, done?: () => void) => Promise<void> | void;
}

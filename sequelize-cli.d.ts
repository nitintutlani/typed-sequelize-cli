declare module "sequelize-cli" {
    import {QueryInterface, SequelizeStatic} from 'sequelize';

    export type Migration = (queryInterface?: QueryInterface, Sequelize?: SequelizeStatic) => Promise<void> | void;

    export type Seeder = (queryInterface?: QueryInterface, Sequelize?: SequelizeStatic) => Promise<void> | void;
}

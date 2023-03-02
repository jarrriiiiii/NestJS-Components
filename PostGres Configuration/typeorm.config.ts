import { TypeOrmModuleOptions } from "@nestjs/typeorm/dist";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type:'postgres',
    host:'localhost',
    port:5432,
    username:'postgres',
    password:'0000',
    database:'taskmanagement',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],  //current directory + One folder back + Any folder + Any file.entity.ts
    synchronize: true,
};

// To make a connection to the DB
// -Make a 'typeorm.config.ts' file in the 'config' folder in the 'src' and code the configuration
// -Add this file in the IMPORT array of the app.module.ts
// -DB will be connected

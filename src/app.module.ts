import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Console } from './consoles/entities/console.entity';
import { ConsoleModule } from './consoles/module/console.module';
import { ConsoleService } from './consoles/services/console.services';
import { Jogos } from './jogos/entities/jogos.entity';
import { JogosModule } from './jogos/module/jogos.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Lar2401$',
    database: 'db_loja_jogos',
    entities: [Console, Jogos],
    synchronize: true
  }),
  ConsoleModule, 
  JogosModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConsoleController } from "../controllers/console.controllers";
import { Console } from "../entities/console.entity";
import { ConsoleService } from "../services/console.services";

@Module({
    imports: [TypeOrmModule.forFeature([Console])],
    providers: [ConsoleService],
    controllers:[ConsoleController],
    exports: [TypeOrmModule]
})
export class ConsoleModule{}

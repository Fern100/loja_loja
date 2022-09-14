import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JogosController } from "../controllers/jogos.controllers";
import { Jogos } from "../entities/jogos.entity";
import { JogosService } from "../services/jogos.services";

@Module({
    imports: [TypeOrmModule.forFeature([Jogos])],
    providers: [JogosService],
    controllers:[JogosController],
    exports: [TypeOrmModule]
})
export class JogosModule{}
import { HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Jogos } from "../entities/jogos.entity";

export class JogosService{
    constructor(
        @InjectRepository(Jogos)
        private jogosRepository: Repository<Jogos>){}

        async  findAll(): Promise<Jogos[]> {
            return this.jogosRepository.find({
                relations: {console: true}
            })
        }

        async findById(id: number): Promise<Jogos> {
            let jogos = await this.jogosRepository.findOne({
                where: {
                    id
                },
                relations: {console: true}
            })
            if(!jogos)
            throw new HttpException('Jogo não encontrado', HttpStatus.NOT_FOUND)
            return jogos
        }

        async findByNome(nome: string): Promise<Jogos[]>{
            return this.jogosRepository.find({
                where: {
                    nome: ILike(`%${nome}%`)
                },
                order: {
                        nome: "ASC"
                },
                relations: {console: true}
        })
    }
        async create(jogos: Jogos): Promise<Jogos>{
            return this.jogosRepository.save(jogos)}
    
        async update(jogos: Jogos): Promise<Jogos>{
            let jogosUpdate = await this.findById(jogos.id)
            if(!jogosUpdate || !jogos.id)
            throw new HttpException('Jogo não encontrado', HttpStatus.NOT_FOUND)
        return this.jogosRepository.save(jogos)}
    
        async delete(id: number): Promise<DeleteResult>{
            let jogosDelete = await this.findById(id)
            if(!jogosDelete)
            throw new HttpException('Jogo não encontrado', HttpStatus.NOT_FOUND)
        return this.jogosRepository.delete(id)}
}
import { HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { Console } from "../entities/console.entity";

export class ConsoleService{
    constructor(
        @InjectRepository(Console)
        private consoleRepository: Repository<Console>){}

    async  findAll(): Promise<Console[]> {
        return this.consoleRepository.find({
            relations: {jogos: true}
        })
    }

    async findById(id: number): Promise<Console>{
        let console = await this.consoleRepository.findOne({
            where: {
                id
            },
            relations: {jogos: true}
    })
    if(!console)
        throw new HttpException('Console não encontrado', HttpStatus.NOT_FOUND)

        return console
    }

    async create(console: Console): Promise<Console>{
        return this.consoleRepository.save(console)}

    async update(console: Console): Promise<Console>{
        let consoleUpdate = await this.findById(console.id)
        if(!consoleUpdate || !console.id)
        throw new HttpException('Console não encontrado', HttpStatus.NOT_FOUND)
    return this.consoleRepository.save(console)}

    async delete(id: number): Promise<DeleteResult>{
        let consoleDelete = await this.findById(id)
        if(!consoleDelete)
        throw new HttpException('Console não encontrado', HttpStatus.NOT_FOUND)
    return this.consoleRepository.delete(id)}

}
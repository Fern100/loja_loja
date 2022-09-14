import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Console } from "../entities/console.entity";
import { ConsoleService } from "../services/console.services";

@Controller('/consoles')
export class ConsoleController{
    constructor(private readonly service: ConsoleService) {}
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Console[]> {
        return this.service.findAll()
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id:number): Promise<Console>{
        return this.service.findById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() console: Console): Promise<Console>{
        return this.service.create(console)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body()console: Console): Promise<Console>{
        return this.service.update(console)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id',ParseIntPipe)id: number){
        return this.service.delete(id)
}
}
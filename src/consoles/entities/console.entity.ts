import { IsNotEmpty, MaxLength } from "class-validator";
import { Jogos } from "src/jogos/entities/jogos.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('tb_console')
export class Console{
    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @MaxLength(50)
    @Column({nullable: false, length:50})
    nome: string

    @IsNotEmpty()
    @MaxLength(50)
    @Column({nullable: false, length:50})
    marca: string

    @IsNotEmpty()
    @MaxLength(50)
    @Column({nullable: false, length:50})
    descricao: string   
    
    @ManyToMany(() => Jogos, (jogos) => jogos.console)
    jogos: Jogos[]
}

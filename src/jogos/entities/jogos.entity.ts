import { Console } from "src/consoles/entities/console.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('tb_jogos')
    export class Jogos{
        @PrimaryGeneratedColumn()
        id: number

        @Column()
        nome: string

        @Column()
        classificacao: number

        @Column()
        genero: string

        @Column("decimal", { precision: 5, scale: 2 })
        preco: number

        @ManyToMany(()=> Console, (console) => console.jogos)
        @JoinTable()
        console: Console[]
    }
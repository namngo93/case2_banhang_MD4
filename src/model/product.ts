import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
//Entity la chu thich 1 cai bang
@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: "varchar", length : 255})
    name: string;
    @Column({type: "int"})
    price: number;
    @Column({type: "text"})
    image: string;
    @Column({type: "text"})
    description: string;
    @Column()
    category: number;
    @Column({type:"int"})
    idOrder: number;
}
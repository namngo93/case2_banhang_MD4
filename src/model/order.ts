import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
//Entity la chu thich 1 cai bang
@Entity()
export class Order{
    @PrimaryGeneratedColumn()
    idOrder: number;
    @Column({type: "int"})
    idUser: number;
    @Column({type: "timestamp"})
    time: number;
    @Column({type: "int"})
    totallpoint: number;
    @Column({type: "text"})
    status: string;

}
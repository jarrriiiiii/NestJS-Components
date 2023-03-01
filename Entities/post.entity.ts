import { type } from "os";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class FeedPostEntity {
@PrimaryGeneratedColumn() //Tells that this is the primary key column and the ID is generated automatically
id: number;

@Column({default: ''})
body: string;

@Column({type: 'timestamp', default:()=> 'CURRENT_TIMESTAMP'})
createdAt: Date;
}
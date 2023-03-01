import { BaseEntity,Column,Entity, PrimaryGeneratedColumn } from "typeorm";
import { TaskStatus } from "./tasks.model";

// Entity can be defined as the table of the DB
// We define the entity in the separate file 'task.entity.ts'
//Creating the entities below
 

@Entity()
export class Task extends BaseEntity {
@PrimaryGeneratedColumn() //Tells that this is the primary key column and the ID is generated automatically
id: number;

@Column()
title: string;

@Column()
description: string;

@Column()
status: TaskStatus;
}
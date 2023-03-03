import { Task } from "src/task.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Task)
export class TaskRepository extends Repository<Task>{ //'Task' is an entity here
    
}

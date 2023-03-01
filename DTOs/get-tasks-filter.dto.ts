//Applying CLASS VALIDATOR pipes in the DTO to prevent any blank value from being inserted in the following fields.
//Pipes are applied to the controllers 


// [FEATURE 4]
// To restrict the user to only input the available 'TASK STATUS' when performing 'Get by Search and Status' operation. Available 'Task Status' are [DONE, OPEN, IN_PROGRESS]
// -Use validation pipes (Parameter level).
// -Validation pipes will be added in the DTO file.
// -Pipe will be imlemented in the controller file. Beside the parameter. Such as '@Query(ValidationPipe)'

import { IsNotEmpty, IsOptional, isNotEmpty, IsIn } from "class-validator";
import { TaskStatus } from "../tasks.model";

export class GetTasksFilterDto {
    
    @IsOptional()
    @IsIn([TaskStatus.DONE, TaskStatus.OPEN, TaskStatus.IN_PROGRESS])
    status: TaskStatus;

    @IsOptional()
    @IsNotEmpty()
    search: string;
}
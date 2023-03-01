import { PipeTransform, ArgumentMetadata, NotFoundException, BadRequestException } from '@nestjs/common'
import { TaskStatus } from '../tasks.model';


// [FEATURE 3]
// To restrict the user to input only the available 'Task Status' when the changing the TASK STATUS and prevent user if user enter some other values execept for the available value in the array
// -Make a custom pipe to only allow the valid 'Task Status' from the user.
// -Pipe will be imlemented in the controller file. Beside the parameter. Such as '@Body('status') status : TaskStatus)'.
// -Coding of the custom pipe will be done separately in a task-status-validation.pipeline.ts file.



export class  TaskStatusValidationPipe implements PipeTransform {
  

    //Defining available options of the tasks statuses
        readonly allowedStatuses = [
            TaskStatus.OPEN,
            TaskStatus.DONE,
            TaskStatus.IN_PROGRESS,
        ]

                                    //TRANSFORM FUNCTION
      transform(value: any){  //this argumment is optional --> metadata: ArgumentMetadata

    //To make the status keyword capital 
        value = value.toUpperCase(); 
           
    //To throw an exception/error If STATUS is invalid
    if(!this.isStatusValid(value)){
        throw new BadRequestException(`"${value}" is an invalid status`)
    }

return value;
     }  


    //Method to check if the STATUS given by the user matches the available array
        private  isStatusValid (status : any) { //this method will take the status as parameter 
            const idx = this.allowedStatuses.indexOf(status) //'status' will be checked by 'indexOf', if it doest not matches from the upper array then '-1' will be stored in the 'idx', otherwise normal value will be stored
            return idx !== -1; // 'idx' will be returned only if it contains the matching value
        }
    } 

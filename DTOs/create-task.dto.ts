//Applying CLASS VALIDATOR pipes in the DTO to prevent any blank value from being inserted in the following fields.
//Pipes are applied to the controllers 



// [FEATURE 1]
// To prevent the blank entry in the field of 'title' and 'description' while creating the task. It should restrict the empty inputs
// -Use validation pipes (handler level).
// -Validation pipes will be added in the DTO file.
// -Pipes will be applied in the controller. Under the POST/PUT/DELETE/GET request.
// -Handler level pipes will be implemented with the keyword '@UsePipes(ValidationPipe)'





import { IsNotEmpty } from "class-validator";



export class CreateTaskDto {

    @IsNotEmpty() //Validator pipe. Implemented on a @POST method
    title: string;

    @IsNotEmpty()//Validator pipe. Implemented on a @POST method
    description: string;
}



//npm install class-validator class-transformer --save
//npm add class-validator class-transformer 
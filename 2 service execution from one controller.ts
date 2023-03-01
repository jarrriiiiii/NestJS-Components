@Get()
getTasks(@Query() filterDto : GetTasksFilterDto) {

//Querry() means that we will ask user to enter it in its link, and those data will be entered in the variables 'status' and 'search'

//if user enters the Querry then 'getTaskWithFilter' will be called.
//else the method 'getAllTask' will be called.

//For this condition we are using the following piece of code
      if (Object.keys(filterDto).length) {
        return this.tasksService.getTasksWithfilters(filterDto);
      }
      else {
        return this.tasksService.getAllTasks();
        }
}

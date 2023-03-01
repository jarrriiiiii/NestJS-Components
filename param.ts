@Get('/:id')
updateTaskStatus(@Param('id') id:string, @Body('status') status : string){
...
}


@Get('/:id')
updateTaskStatus(@Param('id') id:string){
...
}
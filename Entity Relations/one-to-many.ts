//One to Many Relation - We are targetting the 'createdBy' column of the other entity
@OneToMany(()=> Team, team => team.createdBy)
team: Team[]

//One to Many Relation - We are targetting the 'Project Name' column of the other entity
@OneToMany(()=> Project, project => project.ProjectName)
project: Project[]




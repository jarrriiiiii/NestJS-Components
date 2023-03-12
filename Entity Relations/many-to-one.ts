//Many to One relation
@ManyToOne(()=> StaffProfile)
@JoinColumn({name:'ProjectName'}) //Associating above column with the other entity
staffProfile: StaffProfile //'staffProfile' is the custom api based name for the above 'createdBy' column.




//Many to One relation
@ManyToOne(()=> StaffProfile)
@JoinColumn({name:'createdBy'}) //Associating above column with the other entity
staffProfile: StaffProfile //'staffProfile' is the custom api based name for the above 'createdBy' column.

import { Auth } from 'src/auth/entities/auth.entity';
import { Project } from 'src/utils/project/entities/project.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';


@Entity('staff-profile')
export class StaffProfile {


  @PrimaryGeneratedColumn()
  Staffid: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  authId: number; //associated with the authID 

//connected with the auth entity
  @OneToOne(() => Auth)
  @JoinColumn({name:'authId'})
  authID:Auth; //associated with the authID above
}



-----------------------------


import { StaffProfile } from 'src/staff/staff-profile/entities/staff-profile.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';

@Entity()
export class Auth {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  isActive: boolean;

  @OneToOne(()=>StaffProfile, (staffprofile)=>staffprofile.authId)
  staffprofile: StaffProfile
}

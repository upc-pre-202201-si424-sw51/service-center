import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { createHmac } from 'crypto';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  hashPassword() {
    this.password = createHmac('sha256', this.password).digest('hex');
  }
  @Column()
  password: string;
}

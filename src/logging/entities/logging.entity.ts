import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'logs' })
export class Logging {
  @PrimaryGeneratedColumn()
  id: number;

  //TODO make this type a custom type
  @Column({ type: 'text' })
  log: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sign_docs')
export class SignDocs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  trackId: string;

  @Column()
  unsignedDocPath: string;

  @Column({ nullable: true })
  signedDocPath: string;
}

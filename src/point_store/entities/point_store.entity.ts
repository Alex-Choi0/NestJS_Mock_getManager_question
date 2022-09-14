import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('points')
export class PointsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  userId: string;

  @Column({ type: 'int' })
  points: number;

  @Column({ type: 'int' })
  remain_points: number;

  // 획득한 포인트의 타입. ex) 만보기, 출석체크
  @Column({ type: 'varchar' })
  type: string;

  @Column({ type: 'varchar' })
  name: string;

  @CreateDateColumn()
  create_at: Date;

  @Column({ type: 'date' })
  expire_at: Date;
}

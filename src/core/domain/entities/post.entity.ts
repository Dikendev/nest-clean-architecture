import { Entity } from 'src/core/base/entity';

export class PostEntity extends Entity {
  userId: number;
  title: string;
  content: string;
}

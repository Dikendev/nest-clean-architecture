import { Repository } from '../base/repository';
import { PostEntity } from '../domain/entities/post.entity';

export abstract class PostRepository extends Repository<PostEntity> {}

import { Mapper } from 'src/core/base/mapper';
import { UserEntity } from 'src/core/domain/entities/user.entity';
import { CreateUserDto } from 'src/share/dtos/users/create-user.dto';

export class CreateUserMapper extends Mapper<CreateUserDto, UserEntity> {
  public mapFrom(param: CreateUserDto): UserEntity {
    const user = new UserEntity();

    user.name = param.name;
    user.email = param.email;
    user.password = param.password;

    return user;
  }

  public mapTo(param: UserEntity): CreateUserDto {
    const user = new CreateUserDto();

    user.id = param.id;
    user.name = param.name;
    user.email = param.email;
    user.password = param.password;

    return user;
  }
}

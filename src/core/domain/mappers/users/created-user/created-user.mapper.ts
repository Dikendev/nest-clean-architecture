import { Mapper } from 'src/core/base/mapper';
import { UserEntity } from 'src/core/domain/entities/user.entity';
import { CreatedUserDto } from 'src/share/dtos/users/created-user.dto';

export class CreatedUserMapper implements Mapper<CreatedUserDto, UserEntity> {
  public mapFrom(param: CreatedUserDto): UserEntity {
    const user = new UserEntity();

    user.id = param.id;
    user.name = param.name;
    user.email = param.email;

    return user;
  }

  public mapTo(param: UserEntity): CreatedUserDto {
    const user = new CreatedUserDto();

    user.id = param.id;
    user.name = param.name;
    user.email = param.email;

    return user;
  }
}

import { UseCase } from 'src/core/base/use-case';
import { UserRepository } from 'src/core/repositories/user.repository';
import { CreateUserDto } from 'src/share/dtos/users/create-user.dto';

export class CreateUserUseCase implements UseCase<CreateUserDto> {
  constructor(private readonly repository: UserRepository) {}
}

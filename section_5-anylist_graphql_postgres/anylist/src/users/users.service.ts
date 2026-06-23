import { Injectable, NotImplementedException } from '@nestjs/common';

// import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  findAll(): Promise<User[]> {
    throw new NotImplementedException('findAll method not implemented');
  }

  findOne(id: string): Promise<User> {
    throw new NotImplementedException('findOne method not implemented');
  }

  block(id: string): Promise<User> {
    throw new NotImplementedException('block method not implemented');
  }
}

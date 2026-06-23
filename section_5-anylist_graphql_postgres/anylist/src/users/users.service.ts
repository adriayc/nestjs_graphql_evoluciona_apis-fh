import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotImplementedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './entities/user.entity';
import { SignupInput } from 'src/auth/dto/inputs/signup.input';

@Injectable()
export class UsersService {
  private logger = new Logger('UsersService');

  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(signupInput: SignupInput): Promise<User> {
    try {
      const newUser = this.usersRepository.create(signupInput);

      return await this.usersRepository.save(newUser);
    } catch (error) {
      this.handlerDBError(error);
    }
  }

  findAll(): Promise<User[]> {
    throw new NotImplementedException('findAll method not implemented');
  }

  findOne(id: string): Promise<User> {
    throw new NotImplementedException('findOne method not implemented');
  }

  block(id: string): Promise<User> {
    throw new NotImplementedException('block method not implemented');
  }

  private handlerDBError(error: any): never {
    if (error.code === '23505') {
      throw new BadRequestException(error.detail.replace('Key ', ''));
    }

    this.logger.error(error);
    throw new InternalServerErrorException('Please check server logs');
  }
}

import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
  NotImplementedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';

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
      const newUser = this.usersRepository.create({
        ...signupInput,
        password: bcrypt.hashSync(signupInput.password, 10),
      });

      return await this.usersRepository.save(newUser);
    } catch (error) {
      this.handlerDBError(error);
    }
  }

  findAll(): Promise<User[]> {
    throw new NotImplementedException('findAll method not implemented');
  }

  async findOneByEmail(email: string): Promise<User> {
    try {
      return await this.usersRepository.findOneByOrFail({ email });
    } catch (error) {
      // this.handlerDBError({
      //   code: '404',
      //   detail: `User with emai ${email} not found`,
      // });
      throw new NotFoundException(`User with email ${email} not found`);
    }
  }

  async findOneById(id: string): Promise<User> {
    try {
      return await this.usersRepository.findOneByOrFail({ id });
    } catch (error) {
      throw new NotFoundException(`User with id #${id} not found`);
    }
  }

  block(id: string): Promise<User> {
    throw new NotImplementedException('block method not implemented');
  }

  private handlerDBError(error: any): never {
    if (error.code === '23505') {
      throw new BadRequestException(error.detail.replace('Key ', ''));
    }
    // if (error.code === 404) {
    //   throw new NotFoundException(error.detail);
    // }

    this.logger.error(error);
    throw new InternalServerErrorException('Please check server logs');
  }
}

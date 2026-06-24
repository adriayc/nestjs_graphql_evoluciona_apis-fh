import bcrypt from 'bcrypt';
import {
  Injectable,
  NotImplementedException,
  UnauthorizedException,
} from '@nestjs/common';

import { SignupInput, LoginInput } from './dto/inputs';
import { AuthResponse } from './types/auth-response.type';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  async signup(signupInput: SignupInput): Promise<AuthResponse> {
    const user = await this.userService.create(signupInput);

    // TODO: crear JWT
    const token = 'ABC123';

    return { user, token };
  }

  async login(loginInput: LoginInput): Promise<AuthResponse> {
    const { email, password } = loginInput;

    const user = await this.userService.findOneByEmail(email);
    // Validate password
    if (!bcrypt.compareSync(password, user.password)) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // TODO: generate token
    const token = 'ABC123';

    return {
      user,
      token,
    };
  }

  revalidateToken() {
    throw new NotImplementedException('revalidateToken method not implemented');
  }
}

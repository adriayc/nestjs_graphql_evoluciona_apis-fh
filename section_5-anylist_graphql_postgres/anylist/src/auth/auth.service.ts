import { Injectable, NotImplementedException } from '@nestjs/common';

import { SignupInput } from './dto/inputs/signup.input';
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

  login() {
    throw new NotImplementedException('login method not implemented');
  }

  revalidateToken() {
    throw new NotImplementedException('revalidateToken method not implemented');
  }
}

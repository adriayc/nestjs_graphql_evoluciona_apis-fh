import { Injectable, NotImplementedException } from '@nestjs/common';

import { SignupInput } from './dto/inputs/signup.input';
import { AuthResponse } from './types/auth-response.type';

@Injectable()
export class AuthService {
  signup(signupInput: SignupInput): Promise<AuthResponse> {
    console.log(signupInput);
    throw new NotImplementedException('signup method not implemented');
  }

  login() {
    throw new NotImplementedException('login method not implemented');
  }

  revalidateToken() {
    throw new NotImplementedException('revalidateToken method not implemented');
  }
}

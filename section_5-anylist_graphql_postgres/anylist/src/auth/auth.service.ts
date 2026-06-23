import { Injectable, NotImplementedException } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {
    throw new NotImplementedException('signup method not implemented');
  }

  login() {
    throw new NotImplementedException('login method not implemented');
  }

  revalidateToken() {
    throw new NotImplementedException('revalidateToken method not implemented');
  }
}

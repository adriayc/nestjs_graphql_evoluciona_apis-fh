import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {
  async executeSeed(): Promise<boolean> {
    // Limpiar la DB
    // Crear users
    // Crear items

    return true;
  }
}

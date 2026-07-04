import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Validation setup
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      // forbidNonWhitelisted: true, // Disable for multiple @ArgsType() in the resolver (Note: Look for another alternative)
    }),
  );

  // await app.listen(process.env.PORT ?? 3000);
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
  console.log(`App running on port ${PORT}`);
}
bootstrap();

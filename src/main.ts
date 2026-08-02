import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 app.enableCors({
  origin: 'http://localhost:5173', // o 3001/puerto de tu React
  methods: ['GET','POST','PATCH','DELETE'],
  credentials: false,
});
  const config = new DocumentBuilder()
    .setTitle('Tasks API')
    .setDescription('API para gestionar tareas')
    .setVersion('1.0')
    .build();
  SwaggerModule.setup('api', app, SwaggerModule.createDocument(app, config));

  await app.listen(3000);
}
bootstrap();
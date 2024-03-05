import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { BlogController } from './blog.controller';
import { AppService } from './app.service';
import { BlogService } from './blog.service';
import { Blog } from './blog.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Blog]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.POSTGRES_URL,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController, BlogController],
  providers: [AppService, BlogService],
})
export class AppModule {}

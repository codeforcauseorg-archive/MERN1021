import { Module } from '@nestjs/common';
import { AnotherController } from './another.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AppController, AnotherController],
  providers: [AppService],
})
export class AppModule {}

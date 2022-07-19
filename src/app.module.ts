import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import { LessonModule } from './lesson/lesson.module';
import { UserModule } from './user/user.module';
import { LessonModule } from './lesson/lesson.module';

@Module({
  imports: [CourseModule, LessonModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

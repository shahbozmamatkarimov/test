import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';
import { SequelizeModule } from '@nestjs/sequelize';
import { StaffModule } from './staff/staff.module';
import { RoleModule } from './role/role.module';
import { LevelModule } from './level/level.module';
import { StaffSubjectsModule } from './staff_subjects/staff_subjects.module';
import { SubjectsModule } from './subjects/subjects.module';
import { GroupsModule } from './groups/groups.module';
import { TestGroupModule } from './test-group/test-group.module';
import { StaffGroupModule } from './staff_group/staff_group.module';
import { QuestionModule } from './question/question.module';
import { AnswersModule } from './answers/answers.module';
import { CheckAnswerModule } from './check_answer/check_answer.module';
import { TestResultsModule } from './test_results/test_results.module';
import { StudentsModule } from './students/students.module';
import { TestGroup } from './test-group/models/test-group.model';
import { StaffGroup } from './staff_group/models/staff_group.model';
import { Question } from './question/models/question.model';
import { Answer } from './answers/models/answer.model';
import { CheckAnswer } from './check_answer/models/check_answer.model';
import { TestResult } from './test_results/models/test_result.model';
import { Student } from './students/models/student.model';
import { Group } from './groups/models/group.model';
import { Subject } from './subjects/models/subject.model';
import { StaffSubject } from './staff_subjects/models/staff_subject.model';
import { Level } from './level/models/level.model';
import { Role } from './role/models/role.model';
import { Staff } from './staff/models/staff.model';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5000,
      username: 'postgres',
      password: '2303',
      database: 'test',
      models: [
        Staff,
        Role,
        Level,
        StaffSubject,
        Subject,
        Group,
        TestGroup,
        StaffGroup,
        Question,
        Answer,
        CheckAnswer,
        TestResult,
        Student,
      ],
      autoLoadModels: true,
      logging: (msg) => {
        console.log('-------------', msg);
      },
    }),
    StaffModule,
    RoleModule,
    LevelModule,
    StaffSubjectsModule,
    SubjectsModule,
    GroupsModule,
    TestGroupModule,
    StaffGroupModule,
    QuestionModule,
    AnswersModule,
    CheckAnswerModule,
    TestResultsModule,
    StudentsModule,
    AdminModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsPhoneNumber, IsString } from 'class-validator';

export class CreateTestGroupDto {
  @ApiProperty({ example: '1', description: 'subject id' })
  @IsNotEmpty()
  @IsNumber()
  subject_id: number;

  @ApiProperty({ example: '30', description: 'test count' })
  @IsNotEmpty()
  @IsNumber()
  tests_count: number;

  @ApiProperty({ example: 'title....', description: 'test group title' })
  @IsNotEmpty()
  @IsPhoneNumber()
  test_title: string;

  @ApiProperty({ example: '2 hours', description: 'test time' })
  @IsNotEmpty()
  @IsString()
  test_time: string;
}

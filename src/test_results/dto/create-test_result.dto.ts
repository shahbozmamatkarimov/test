import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTestResultDto {
  @ApiProperty({ example: '1', description: 'student id' })
  @IsNotEmpty()
  @IsNumber()
  student_id: number;

  @ApiProperty({ example: '1', description: 'test_group_id' })
  @IsNotEmpty()
  @IsNumber()
  test_group_id: number;

  @ApiProperty({ example: '12', description: 'correct_count' })
  @IsNotEmpty()
  @IsNumber()
  correct_count: number;
}

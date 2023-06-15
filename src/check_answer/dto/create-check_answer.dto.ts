export class CreateCheckAnswerDto {}
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateAnswerDto {
  @ApiProperty({ example: '1', description: 'answer id' })
  @IsNotEmpty()
  @IsNumber()
  answer_id: number;

  @ApiProperty({ example: '1', description: 'question id' })
  @IsNotEmpty()
  @IsNumber()
  question_id: number;

  @ApiProperty({ example: '2', description: 'text result id' })
  @IsNotEmpty()
  @IsNumber()
  test_result_id: number;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAnswerDto {
  @ApiProperty({ example: 'A', description: 'answer' })
  @IsNotEmpty()
  @IsString()
  answer: string;

  @ApiProperty({ example: 'false', description: 'is true' })
  @IsNotEmpty()
  @IsBoolean()
  is_true: boolean;

  @ApiProperty({ example: '1', description: 'question id' })
  @IsNotEmpty()
  @IsNumber()
  question_id: number;
}

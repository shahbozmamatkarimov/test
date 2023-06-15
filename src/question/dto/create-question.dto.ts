import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateQuestionDto {
  @ApiProperty({ example: 'What is this?', description: 'question' })
  @IsNotEmpty()
  @IsString()
  question: string;

  @ApiProperty({ example: '1', description: 'test_group_id' })
  @IsNotEmpty()
  @IsNumber()
  test_group_id: number;

  @ApiProperty({
    example: 'false',
    description: 'is multi answer',
  })
  @IsNotEmpty()
  @IsBoolean()
  is_multi_answer: boolean;
}

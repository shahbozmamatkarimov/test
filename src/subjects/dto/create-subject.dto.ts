import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSubjectDto {
  @ApiProperty({ example: 'history', description: 'subject name' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'url', description: 'subject image' })
  @IsNotEmpty()
  @IsString()
  image: string;
}

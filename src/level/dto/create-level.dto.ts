import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLevelDto {
  @ApiProperty({ example: 'I', description: 'level' })
  @IsNotEmpty()
  @IsString()
  level: string;
}

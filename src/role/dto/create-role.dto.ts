import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({ example: 'John', description: 'name' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: 'I am a full stack web developer',
    description: 'description',
  })
  @IsNotEmpty()
  @IsString()
  description: string;
}

import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateStudentDto {
  @ApiProperty({ example: 'John Doe', description: 'full_name' })
  @IsNotEmpty()
  @IsString()
  full_name: string;

  @ApiProperty({ example: 'url', description: 'image' })
  @IsNotEmpty()
  @IsString()
  image: string;

  @ApiProperty({ example: '+998 99 999 99 99', description: 'phone number' })
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty({ example: 'john23', description: 'username' })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({ example: 'john2023', description: 'password' })
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @ApiProperty({ example: '1', description: 'group_id' })
  @IsNotEmpty()
  @IsNumber()
  group_id: number;
}

import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
  IsEmail,
} from 'class-validator';

export class CreateStaffDto {
  @ApiProperty({ example: 'John Doe', description: 'fullname' })
  @IsNotEmpty()
  @IsString()
  fullname: string;

  @ApiProperty({ example: '1', description: 'level_id' })
  @IsNotEmpty()
  @IsNumber()
  level_id: number;

  @ApiProperty({ example: 'url', description: 'image' })
  @IsNotEmpty()
  @IsString()
  image: string;

  @ApiProperty({ example: '+998999999999', description: 'phone' })
  @IsNotEmpty()
  @IsPhoneNumber()
  phone: string;

  @ApiProperty({ example: 'john2024', description: 'username' })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({ example: 'pa$$word2024', description: 'password' })
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @ApiProperty({ example: '1', description: 'role_id' })
  @IsNotEmpty()
  @IsNumber()
  role_id: number;

  @ApiProperty({ example: 'http://t.me/url', description: 'telegram' })
  @IsNotEmpty()
  @IsString()
  telegram: string;

  @ApiProperty({ example: 'example@gmail.com', description: 'email' })
  @IsNotEmpty()
  @IsEmail()
  email: string;
}

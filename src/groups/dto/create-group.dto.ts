import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateGroupDto {
  @ApiProperty({ example: 'group A', description: 'group name' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: '4', description: 'group level' })
  @IsNotEmpty()
  @IsString()
  year: string;

  @ApiProperty({ example: '4', description: 'staff level' })
  @IsNotEmpty()
  @IsNumber()
  staff_id: number;
}

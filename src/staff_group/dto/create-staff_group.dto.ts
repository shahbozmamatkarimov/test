import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateStaffGroupDto {
  @ApiProperty({ example: '1', description: 'stuff_id' })
  @IsNotEmpty()
  @IsNumber()
  staff_id: number;

  @ApiProperty({ example: '1', description: 'group_id' })
  @IsNotEmpty()
  @IsNumber()
  group_id: number;
}

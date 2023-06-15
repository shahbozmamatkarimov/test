import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateStaffSubjectDto {
  @ApiProperty({ example: '1', description: 'stuff_id' })
  @IsNotEmpty()
  @IsNumber()
  staff_id: number;

  @ApiProperty({ example: '1', description: 'subject_id' })
  @IsNotEmpty()
  @IsNumber()
  subject_id: number;
}

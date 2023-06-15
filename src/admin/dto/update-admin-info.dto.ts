import { ApiProperty } from '@nestjs/swagger';

export class UpdateAdminInfo {
  @ApiProperty({
    type: 'string',
    example: 'shahboz',
    description: 'admin new user name',
  })
  username?: string;

  @ApiProperty({
    type: 'string',
    example: 'shahboz@gmail.com',
    description: 'admin new email',
  })
  email?: string;
}

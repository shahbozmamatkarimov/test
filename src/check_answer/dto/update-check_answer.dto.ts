import { PartialType } from '@nestjs/swagger';
import { CreateCheckAnswerDto } from './create-check_answer.dto';

export class UpdateCheckAnswerDto extends PartialType(CreateCheckAnswerDto) {}

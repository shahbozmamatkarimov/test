import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StaffSubjectsService } from './staff_subjects.service';
import { CreateStaffSubjectDto } from './dto/create-staff_subject.dto';
import { UpdateStaffSubjectDto } from './dto/update-staff_subject.dto';

@Controller('stuff-subjects')
export class StaffSubjectsController {
  constructor(private readonly staffSubjectsService: StaffSubjectsService) {}

  @Post()
  create(@Body() createStaffSubjectDto: CreateStaffSubjectDto) {
    return this.staffSubjectsService.create(createStaffSubjectDto);
  }

  @Get()
  findAll() {
    return this.staffSubjectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.staffSubjectsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStaffSubjectDto: UpdateStaffSubjectDto,
  ) {
    return this.staffSubjectsService.update(+id, updateStaffSubjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.staffSubjectsService.remove(+id);
  }
}

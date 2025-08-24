import { Controller, Get, Post, Body } from '@nestjs/common';
import { ServicesService } from './services.service';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Post()
  async create(
    @Body()
    body: {
      name: string;
      price: number;
      duration: number;
    },
  ) {
    return this.servicesService.create(body);
  }

  @Get()
  async findAll() {
    return this.servicesService.findAll();
  }
}

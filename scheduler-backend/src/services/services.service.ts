import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ServicesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: { name: string; price: number; duration: number }) {
    return this.prisma.service.create({ data });
  }

  // Listar todos os serviços
  async findAll() {
    return this.prisma.service.findMany();
  }

  // Buscar serviço pelo ID
  async findById(id: number) {
    const service = await this.prisma.service.findUnique({
      where: { id },
    });

    if (!service) {
      throw new NotFoundException('Service not found');
    }

    return service;
  }
}

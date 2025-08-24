import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AppointmentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: { userId: number; serviceId: number; date: Date }) {
    return this.prisma.appointment.create({ data });
  }

  async findAll() {
    return this.prisma.appointment.findMany({
      include: {
        user: true,
        service: true,
      },
    });
  }

  async findById(id: number) {
    const appointment = await this.prisma.appointment.findUnique({
      where: { id },
      include: { user: true, service: true },
    });
    if (!appointment) throw new NotFoundException('Appointment not found');
    return appointment;
  }

  async cancel(id: number) {
    await this.findById(id);
    return this.prisma.appointment.update({
      where: { id },
      data: { status: 'canceled' },
    });
  }

  async confirm(id: number) {
    await this.findById(id); // só valida se existe
    return this.prisma.appointment.update({
      where: { id },
      data: { status: 'confirmed' },
    });
  }
}

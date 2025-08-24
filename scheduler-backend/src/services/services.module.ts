import { Module } from '@nestjs/common';
import { ServicesController } from './services.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { ServicesService } from './services.service';

@Module({
  imports: [PrismaModule],
  controllers: [ServicesController],
  providers: [ServicesService],
})
export class ServicesModule {}

import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // <- garante que qualquer módulo possa usar sem precisar importar
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}

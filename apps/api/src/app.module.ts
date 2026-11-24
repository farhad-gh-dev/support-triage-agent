import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';

// Root module. Later phases add one module each: docs (RAG), tickets, triage, approvals.
@Module({ imports: [HealthModule] })
export class AppModule {}

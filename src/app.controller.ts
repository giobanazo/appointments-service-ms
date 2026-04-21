import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DataSource } from 'typeorm';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly dataSource: DataSource
  ) {}

  @Get()
  getHello(): string {
    return "¡Hola! QUE HACES AQUI";
  }

  @Get('health')
  healthCheck() {
    return {
      status: 'ok',
      service: 'appointments-service',
      timestamp: new Date().toISOString(),
    };
  }

  @Get('db/ping')
  async dbPing() {
    try {
      await this.dataSource.query('SELECT 1');
      return {
        status: 'ok',
        database: 'connected',
        timestamp: new Date().toISOString(),
      };
    } catch (error: any) {
      return {
        status: 'error',
        database: 'disconnected',
        message: error.message,
        timestamp: new Date().toISOString(),
      };
    }
  }
}
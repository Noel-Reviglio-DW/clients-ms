import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number;
  static host: string;

  constructor( private readonly _configService: ConfigService){
    AppModule.host = this._configService.get("HOST");
    AppModule.port = +this._configService.get("PORT");
  }
}

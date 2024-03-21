import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DebugController } from './debug/debug.controller';
import { TestGateway } from './test/test.gateway';
import { TestModule } from "./test/test.module";
import { ChatGateway } from './chat/chat.gateway';

@Module({
  imports: [
    TestModule
  ],
  controllers: [AppController, DebugController],
  providers: [AppService, TestGateway, ChatGateway],
})
export class AppModule {}

import { NestMiddleware } from '@nestjs/common';
export declare class WebSocketMiddleware implements NestMiddleware {
    use(socket: any, next: () => void): void;
}

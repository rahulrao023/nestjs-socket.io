import { Injectable, NestMiddleware } from '@nestjs/common';
import { Server } from 'socket.io';

@Injectable()
export class WebSocketMiddleware implements NestMiddleware {
  use(socket: any, next: () => void) {
    // Add your middleware logic here
    // For example, you can access the socket connection and perform some operations

    // Emit an event to the client
    socket.emit('message', 'Hello from WebSocket middleware!');

    // Call the next middleware or route handler
    next();
  }
}
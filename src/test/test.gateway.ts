import { SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse, MessageBody } from '@nestjs/websockets';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from "socket.io";

@WebSocketGateway(3001, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
})
export class TestGateway {

  @WebSocketServer() 
  server: Server;

  @SubscribeMessage('events')
  findAll(@MessageBody() data: any): Observable<WsResponse<number>> {
    return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
  }

  @SubscribeMessage('identity')
  async identity(@MessageBody() data: number): Promise<number> {
    return data;
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }

  @SubscribeMessage("ping")
  handlePing() {
    console.log("ping");
    return {
      event: "pong",
      data: "pong"
    };
  }
}

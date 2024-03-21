import { SubscribeMessage, WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect, MessageBody } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway(0, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() 
  server: Server;
  
  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): void {
    console.log("message from chat", {socket_id: client.id, payload});
    // client.emit('messageResponse', 'Hello from WebSocket middleware!');
    this.server.to('room1').emit('message_response', { socket_id: client.id, message: payload.message });
  }

  @SubscribeMessage("ping")
  handlePing(client: any, payload: any): object {
    console.log("ping from chat", {socket_id: client.id, payload});
    return {
      event: "pong",
      data: "pong"
    };
  }

  handleConnection(client: any, ...args: any[]) {
    console.log("connected", { args, socket_id: client.id });
    
    // Access headers and query parameters
    const headers = client.handshake.headers;
    const queryParameters = client.handshake.query;
    console.log('Headers:', headers);
    console.log('Query parameters:', queryParameters);

    this.server.socketsJoin('room1');
  }

  handleDisconnect(client: any) {
    console.log('client disconnected', { socket_id: client.id });
  }
}

import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server } from 'socket.io';
export declare class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    server: Server;
    handleMessage(client: any, payload: any): void;
    handlePing(client: any, payload: any): object;
    handleConnection(client: any, ...args: any[]): void;
    handleDisconnect(client: any): void;
}

import { WsResponse } from '@nestjs/websockets';
import { Observable } from 'rxjs';
import { Server } from "socket.io";
export declare class TestGateway {
    server: Server;
    findAll(data: any): Observable<WsResponse<number>>;
    identity(data: number): Promise<number>;
    handleMessage(client: any, payload: any): string;
    handlePing(): {
        event: string;
        data: string;
    };
}

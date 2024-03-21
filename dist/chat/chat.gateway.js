"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
let ChatGateway = class ChatGateway {
    handleMessage(client, payload) {
        console.log("message from chat", { socket_id: client.id, payload });
        this.server.to('room1').emit('message_response', { message: payload.message });
    }
    handlePing(client, payload) {
        console.log("ping from chat", { socket_id: client.id, payload });
        return {
            event: "pong",
            data: "pong"
        };
    }
    handleConnection(client, ...args) {
        console.log("connected", { args, socket_id: client.id });
        const headers = client.handshake.headers;
        const queryParameters = client.handshake.query;
        console.log('Headers:', headers);
        console.log('Query parameters:', queryParameters);
        this.server.socketsJoin('room1');
    }
    handleDisconnect(client) {
        console.log('client disconnected', { socket_id: client.id });
    }
};
exports.ChatGateway = ChatGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], ChatGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('message'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ChatGateway.prototype, "handleMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)("ping"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], ChatGateway.prototype, "handlePing", null);
exports.ChatGateway = ChatGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(3001, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    })
], ChatGateway);
//# sourceMappingURL=chat.gateway.js.map
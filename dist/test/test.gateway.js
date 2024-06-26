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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const socket_io_1 = require("socket.io");
let TestGateway = class TestGateway {
    findAll(data) {
        return (0, rxjs_1.from)([1, 2, 3]).pipe((0, operators_1.map)(item => ({ event: 'events', data: item })));
    }
    async identity(data) {
        return data;
    }
    handleMessage(client, payload) {
        return 'Hello world!';
    }
    handlePing() {
        console.log("ping");
        return {
            event: "pong",
            data: "pong"
        };
    }
};
exports.TestGateway = TestGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], TestGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('events'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", rxjs_1.Observable)
], TestGateway.prototype, "findAll", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('identity'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TestGateway.prototype, "identity", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('message'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", String)
], TestGateway.prototype, "handleMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)("ping"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestGateway.prototype, "handlePing", null);
exports.TestGateway = TestGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(3001, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    })
], TestGateway);
//# sourceMappingURL=test.gateway.js.map
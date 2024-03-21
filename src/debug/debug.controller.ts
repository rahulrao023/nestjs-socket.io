import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiParam } from "@nestjs/swagger";

@Controller('debug')
export class DebugController {

  // @Get(':name')
  // getParam(@Param('name') name: string) {
  //   return `Hello ${name}`;
  // }

  @Get('/getName/:name')
  @ApiParam({ name: 'name', type: 'string' })
  getName(@Param('name') name: string) {
    return `Hello ${name}`;
  }
}

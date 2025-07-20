import { Controller, Get, Logger } from "@nestjs/common";
import { AppService } from "./app.service.ts";

@Controller("hello")
export class AppController {
  private readonly logger = new Logger(AppController.name);
  constructor(private readonly appService: AppService) {}

  @Get("world")
  get() {
    const content = this.appService.sayHello();
    this.logger.debug(content);
    return content;
  }
}

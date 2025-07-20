// eslint-disable-next-line esm/required-exports
import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.ts";

NestFactory.create(AppModule)
  .then(async (app): Promise<unknown> => await app.listen(3000))
  .catch((e: unknown) => {
    throw new Error("Start application fail!", { cause: e });
  });

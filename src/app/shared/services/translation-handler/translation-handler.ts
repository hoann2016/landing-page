import { Injectable } from "@angular/core";
import { MissingTranslationHandlerParams, MissingTranslationHandler } from "@ngx-translate/core";
import { NotTranslatedService } from "./not-translated-service";

@Injectable()
export class MyMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    this.nts.notTranslated(params.key);
    return '[KEY NOT FOUND]: ' + params.key;
  }

  constructor(private nts: NotTranslatedService) {}
}
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('news')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/getNewsList')
  getNewsList(): Object {
    return this.appService.getNewsList();
  }
  
  @Get('/geBannerList')
  geBannerList(): Object {
    return this.appService.geBannerList();
  }

}

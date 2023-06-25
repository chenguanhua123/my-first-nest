import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  /**
   * 获取资讯列表
   * @returns newsList
   */
  getNewsList (): Object {
    const list: Object  =  [
      { id: 1, date: '2023-06-21 14:01:42', title: 'nest 数据-李强同德国总理朔尔茨共同主持第七轮中德政府磋商并举行会谈', url: 'https://hbimg.huaban.com/ba2e5cd85f4a56eeed1fd0feeecbb90f939bc41ecc76-6Ja1d3_fw658' },
      { id: 2, date: '2023-06-25 10:01:42', title: 'nest 数据-人民日报任仲平文章：百年辉煌，砥砺初心向复兴——写在中国共产党成立100周年之际', url: 'https://img0.baidu.com/it/u=886576521,2576983267&fm=253&fmt=auto&app=138&f=JPEG?w=1373&h=500' },
    ];
    return list;
  }

  /**
   * 获取banner列表
   * @returns bannerList
   */
    geBannerList (): Object {
      const list: Object  =   [
        { id: 1, url: 'https://hbimg.huaban.com/ba2e5cd85f4a56eeed1fd0feeecbb90f939bc41ecc76-6Ja1d3_fw658' },
        { id: 2, url: 'https://img0.baidu.com/it/u=886576521,2576983267&fm=253&fmt=auto&app=138&f=JPEG?w=1373&h=500' },
      ];
      return list;
    }
  

}

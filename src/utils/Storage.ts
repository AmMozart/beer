import { Storage } from '@ionic/storage';

import { BeerData } from '../api/BeerData';

const PAGE_NUMBER = 'PAGE_NUMBER';
const FAVOURITE_BEERS = 'FAVOURITE_BEERS';

class DataBase {
  private storage: Storage;

  public constructor() {
    this.storage = new Storage();
    this.storage.create().then((storage) => (this.storage = storage));
  }

  public setFavouriteBeers(beers: BeerData[]) {
    this.storage.set(FAVOURITE_BEERS, JSON.stringify(beers));
  }

  public getFavouriteBeers(): Promise<BeerData[]> {
    return this.storage.get(FAVOURITE_BEERS).then((beers) => JSON.parse(beers));
  }

  public setPageNumber(pageNumber: number) {
    this.storage.set(PAGE_NUMBER, pageNumber);
  }

  public getPageNumber(): Promise<number> {
    return this.storage.get(PAGE_NUMBER);
  }
}

export default new DataBase();

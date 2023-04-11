import { BeerData } from './BeerData';

class BeerAPI {
  private cache: BeerData[][] = [];

  public async fetchByPage(page: number, beerPerPage = 5): Promise<BeerData[]> {
    if (this.cache[page]) {
      return this.cache[page];
    }

    const url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${beerPerPage}`;
    const beers: BeerData[] = await fetch(url).then((res) => res.json());

    this.cache[page] = beers;

    return beers;
  }
}

export const beerAPI = new BeerAPI();

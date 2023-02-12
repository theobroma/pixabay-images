import { PageEnum } from '@/enums/page.enum';

export const breadcrumbNameMap: { [key: string]: string } = {
  [PageEnum.Trending]: 'Trending',
  [PageEnum.TrendingMovies]: 'Trending Movies',
  [PageEnum.TrendingTV]: 'Trending TV Shows',
  [PageEnum.Details]: 'Details',
  [PageEnum.DetailsMovies]: 'Movies',
  [PageEnum.DetailsTV]: 'TV Shows',
  [PageEnum.Favourites]: 'Favourites',
  [PageEnum.FavouritesMovies]: 'Movies',
  [PageEnum.FavouritesTV]: 'TV Shows',
};

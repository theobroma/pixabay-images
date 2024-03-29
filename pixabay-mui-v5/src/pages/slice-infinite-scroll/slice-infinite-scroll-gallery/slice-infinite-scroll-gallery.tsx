import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { ImageGallery } from '@/components/ImageGallery/ImageGallery';
// import { useNonInitialEffect } from '@/hooks/useNonInitialEffect';
import { useEffectOnce } from '@/hooks/useEffectOnce';
import { useAppDispatch, useAppSelector } from '@/store/configureStore';
import { picturesSelector } from '@/store/pictures/selectors';
import { getPicturesTC, resetPicturesStateAC } from '@/store/pictures/slice';

export const SliceInfiniteScrollGallery = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const {
    data: { hits, total },
    error,
    isError,
    isLoading,
    // isSuccess,
  } = useAppSelector(picturesSelector);

  //   useNonInitialEffect(() => {
  //     if (hits.length === 0) {
  //       dispatch(getPicturesTC({ page: 1 }));
  //     }
  //   }, [dispatch]);

  useEffectOnce(() => {
    console.log('Triggered only once, on mount');
    dispatch(resetPicturesStateAC());
  });

  const handleLoadMore = () => {
    console.log('handleLoadMore :>> ', '=====');
    console.log('total :>> ', total);
    setPage((prev) => prev + 1);
  };

  //   useEffect(() => {
  //     if (page === 1) {
  //       dispatch(getPicturesTC({ page }));
  //     }
  //   }, []);

  useEffect(() => {
    dispatch(getPicturesTC({ page }));
  }, [page]);

  return (
    <InfiniteScroll
      dataLength={total} // This is important field to render the next data
      //   next={fetchData}
      next={handleLoadMore}
      hasMore
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <ImageGallery hits={hits} />
    </InfiniteScroll>
  );
};

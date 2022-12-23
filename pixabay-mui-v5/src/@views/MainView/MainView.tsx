// https://stackoverflow.com/questions/67909356/is-there-any-way-to-fetch-all-the-responses-stored-in-api-slice-rtk-query
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { useDispatch, useSelector } from 'react-redux';
import ImageGallery from '../../@components/ImageGallery';
import { useAppDispatch } from '../../@store/configureStore';
import { useGetPicturesQuery } from '../../@store/pictures/api';
import { picturesSelector } from '../../@store/pictures/selectors';
import { getPicturesTC } from '../../@store/pictures/slice';

const MainView = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const [initialized, setInitialized] = useState(false);
  // const { data, error, isLoading, isFetching, isError }
  const {
    loading: picturesLoading,
    // page,
    pictureSearch,
    data: { hits, total, totalHits },
  } = useSelector(picturesSelector);

  // useEffect(() => {
  //   dispatch(getPicturesTC({ pictureSearch, page }));
  // }, [dispatch]);

  // useEffect(() => {
  //   if (!initialized) {
  //     dispatch(getPicturesTC({ pictureSearch, page }));
  //   }
  // }, [dispatch]);

  const getMorePhotos = async () => {
    setPage(page + 1);
    dispatch(getPicturesTC({ pictureSearch, page }));
    //   page++;
    //   const response = await getPhotos(page);
    //   setItems(items.concat(response.data.hits));
    //   setTotalHits(response.data.totalHits);
    setInitialized(true);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>MainView</Box>
      <InfiniteScroll
        pageStart={page}
        loadMore={getMorePhotos}
        hasMore={totalHits > hits.length}
        threshold={100}
      >
        <ImageGallery hits={hits} />
      </InfiniteScroll>
    </Container>
  );
};

export default MainView;

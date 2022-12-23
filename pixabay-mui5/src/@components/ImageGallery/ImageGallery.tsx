import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

interface Props {
  //   hits: HitsEntityType[];
  hits: any;
}

const ImageGallery = ({ hits = [] }: Props) => {
  // console.log(hits);
  return (
    <ImageList
      //  sx={{ width: 500, height: 450 }}
      cols={5}
      rowHeight={164}
    >
      {hits.map((item: any) => (
        <ImageListItem key={item.id}>
          <img
            // src={`${item.img}?w=248&fit=crop&auto=format`}
            // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            // alt={item.title}
            src={item.webformatURL}
            alt={item.tags}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.tags}
            // subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ImageGallery;

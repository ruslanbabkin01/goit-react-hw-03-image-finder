import PropTypes from 'prop-types';
import { ImageList } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  <ImageList>
    {images.map(img => (
      <ImageGalleryItem
        key={img.id}
        smallImage={img.webformatURL}
        // largeImage={mg.largeImageURL}
        tags={img.tags}
      />
    ))}
  </ImageList>;
};

ImageGallery.prototype = {
  images: PropTypes.array.isRequired,
};

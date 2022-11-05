import PropTypes from 'prop-types';
import { ImageItem, ItemImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ img: { webformatURL, tags } }) => {
  return (
    <ImageItem>
      <ItemImg
        src={webformatURL}
        alt={tags}
        // onClick={() => {
        //   toggleModal();
        //   setModalImg(largeImageURL);
        // }}
      />
    </ImageItem>
  );
};

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  // largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  // toggleModal: PropTypes.func.isRequired,
  // setModalImg: PropTypes.func.isRequired,
};

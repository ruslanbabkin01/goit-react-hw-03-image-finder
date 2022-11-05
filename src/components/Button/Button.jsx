import { Btn, ButtonContainer } from './Button.styled';
import PropTypes from 'prop-types';
import { Loader } from '../Loader/Loader';

export const Button = ({ title, onLoadMore, status }) => (
  <ButtonContainer>
    {status === 'pending' ? (
      <Loader />
    ) : (
      <Btn onClick={onLoadMore}>{title}</Btn>
    )}
  </ButtonContainer>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

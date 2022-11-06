import PropTypes from 'prop-types';
import { Picture } from './Notification.styled';
import pict from '../../images/img_.jpg';

export const Notification = ({ message, status, error }) => (
  <div>
    {(status === 'empty' || status === 'idle') && (
      <Picture src={pict} alt="#" />
    )}
    {status === 'error' && (
      <p>
        {message}, {error.message}
      </p>
    )}
  </div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  error: PropTypes.string,
};

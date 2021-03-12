import { toast } from 'react-toastify';

export default function errorHandler(error) {
  if (error) {
    let message;
    if (error.response) {
      if (error.response.status === 500)
        message = 'Something went terribly wrong';
      else message = error.response.data.message;

      if (typeof message === 'string') console.log(error);

      return Promise.reject(error);
    }
  }
}

import { API_ENDPOINTS } from '@/constants';
import { getApi } from '../config';

/**
 * To get list of skills
 */

const getCategoriesList = () => {
  return getApi(`${API_ENDPOINTS.misc.categories}`);
};

export { getCategoriesList };

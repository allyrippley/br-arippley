import axios from 'axios';

function transformRestaurantData(response) {
  const { data } = response;
  const { restaurants } = data;
  return restaurants.map((restaurant, i) => {
    return { ...restaurant, id: i };
  })
};

export default class DataService {
  getRestaurantsData() {
    return axios.get('https://s3.amazonaws.com/br-codingexams/restaurants.json').then(response => transformRestaurantData(response));
  }
}
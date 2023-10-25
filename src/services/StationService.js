import fetchApiEurocar from '../api/eurocarApi';

const getStationList = (SessionId) => {
  return fetchApiEurocar({
    url: '/getstationlist',
    method: 'POST',
    data: {
      SessionId
    }
  });
}

export { getStationList }

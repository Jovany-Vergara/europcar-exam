import fetchApiEurocar from '../api/eurocarApi';

const login = (ContractId, Password) => {
  return fetchApiEurocar({
    url: '/login',
    method: 'POST',
    data: {
      ContractId,
      Password,
    }
  });
}

export { login }

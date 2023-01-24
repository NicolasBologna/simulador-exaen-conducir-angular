import jwt_decode from 'jwt-decode';

export const getLogedUserId = () => {
  const token = localStorage.getItem('token');
  const decodedToken: TokenInfo = jwt_decode(token!);
  return decodedToken!.id;
};

class TokenInfo {
  id: string = '';
}

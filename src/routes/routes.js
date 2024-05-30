import RegisterUser from '../handler/Authuser/handlerRegister.js';
import LoginUser from '../handler/Authuser/handlerLogin.js';
import GetUserLogin from '../handler/Authuser/handlerGetUserLogin.js';
import AddDestination from '../handler/Destination/handlerAddDest.js';
import GetDestById from '../handler/Destination/handlerGetDestById.js';
import DeleteDestById from '../handler/Destination/handlerDeleteDest.js';

const Routes = [
  {
    method: 'POST',
    path: '/register',
    handler: RegisterUser,
  },
  {
    method: 'POST',
    path: '/login',
    handler: LoginUser,
  },
  {
    method: 'GET',
    path: '/users/me',
    handler: GetUserLogin,
  },
  {
    method: 'POST',
    path: '/destination',
    handler: AddDestination,
  },
  {
    method: 'GET',
    path: '/destination/{id}',
    handler: GetDestById,
  },
  {
    method: 'DELETE',
    path: '/destination/{id}',
    handler: DeleteDestById,
  },
];

export default Routes;

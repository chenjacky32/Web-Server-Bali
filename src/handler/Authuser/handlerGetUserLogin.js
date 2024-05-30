import { connection, query } from '../../services/connDB.js';
import validateToken from '../../middleware/Jwt-Token.js';

const GetUserLogin = async (req, res) => {
  const { authorization } = req.headers;

  // validasi token

  if (!authorization) {
    const responseData = res.response({
      status: 'fail',
      message: 'missing authentication token',
    });
    responseData.code(401);
    return responseData;
  }

  const token = authorization.split(' ')[1];
  const decoded = validateToken(token);

  if (!decoded) {
    const responseData = res.response({
      status: 'fail',
      message: 'invalid authentication token or token Expired',
    });
    responseData.code(401);
    return responseData;
  }

  try {
    const queryData = `SELECT * FROM users WHERE user_id = ? `;
    const userData = await query(queryData, [decoded.userId]);

    if (userData.length === 0) {
      const responseData = res.response({
        status: 'fail',
        message: 'User not found',
      });
      responseData.code(404);
      return responseData;
    }

    const user = userData[0];
    const responseData = res.response({
      status: 'success',
      message: 'User retrieved',
      data: {
        id: user.user_id,
        name: user.name,
        email: user.email,
      },
    });
    responseData.code(200);
    return responseData;
  } catch (error) {
    console.error(error.message);
    const responseData = res.response({
      status: 'fail',
      message: 'internal server error',
    });
    responseData.code(500);
    return responseData;
  }
};
export default GetUserLogin;

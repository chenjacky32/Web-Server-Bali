import { connection, query } from '../../services/connDB.js';
import validateToken from '../../middleware/Jwt-Token.js';

const GetDestById = async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;

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
    const queryData = `SELECT * FROM destination WHERE dest_id = ?`;
    const userData = await query(queryData, [id]);

    if (userData.length > 0) {
      const responseData = res.response({
        status: 'success',
        data: {
          dest_id: userData[0].dest_id,
          name_dest: userData[0].name_dest,
          description: userData[0].description,
          img: userData[0].img,
          location: userData[0].location,
        },
      });
      responseData.code(200);
      return responseData;
    }

    const responseData = res.response({
      status: 'fail',
      message: 'Destination not found',
    });
    responseData.code(404);
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

export default GetDestById;

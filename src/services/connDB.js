import mysql from 'mysql';
import util from 'util';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'app_wisata',
});
connection.connect((err) => {
  if (err) {
    console.log(`gagal koneksi ke database ${err.message}`);
    return;
  }
  console.log('Berhasil Koneksi ke database');
});

const query = util.promisify(connection.query).bind(connection);

export { connection, query };

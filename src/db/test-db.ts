import {createPgPool} from './createPgPool';
import {z} from 'zod';
import {Film} from '../types/films';

(async () => {
  // configure to match docker-compose.yml
  const pool = createPgPool();

  await pool.query(`
    SELECT * from films;
  `).then((res) => {
    // the parse function lets us understand if a body of data is usable or not
    // notice how we can customize how we parse it even after a SCHEMA function
    // has been created for the type Film
    return z.array(Film.SCHEMA).safeParseAsync(res.rows);
  }).then((res) => {
    if (!res.success) {
      throw new Error('DB query for films does not fall in line with zod parser');
    }
    const { data } = res;
    console.log('films', data);
  });

  console.log('Done');
})();

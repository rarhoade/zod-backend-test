import {createPgPool} from './createPgPool';

(async () => {
  // configure to match docker-compose.yml
  const pool = createPgPool();

  //example of how to create a pg table
  await pool.query(`
    DROP TABLE films
  `);

  console.log('Done');
})();
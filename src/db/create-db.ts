import {createPgPool} from './createPgPool';

(async () => {
  // configure to match docker-compose.yml
  const pool = createPgPool();

  //example of how to create a pg table
  await pool.query(`
    CREATE TABLE films (
        title   varchar(40)
    )
  `);

  console.log('Done');
})();


import {createPgPool} from './createPgPool';

(async () => {
  // configure to match docker-compose.yml
  const pool = createPgPool();

  //example of how to insert into pg table
  await pool.query(`
    INSERT INTO films (title)
    VALUES
        ('The Lighthouse'),
        ('Parasite'),
        ('The Thing'),
        ('Terrifier 3')
  `);

  console.log('Done');
})();

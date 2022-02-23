import { createClient } from 'redis';

(async () => {
  const client = createClient();

  client.on('error', (err) => console.log('Redis Client Error', err));

  await client.connect();

  console.log(`Exists: ${await client.exists('justin')}`);
  await client.set('justin', 'Castilla');
  console.log(`GET: ${await client.get('justin')}`)
  await client.del('justin')
  client.quit();
})();

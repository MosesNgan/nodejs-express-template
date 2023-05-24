import type { RedisClientType } from 'redis';
import { createClient } from 'redis';
import { config } from '../config/config';

let redisClient: RedisClientType;
let isReady: boolean;

const cacheOptions = {
  url: config.redis.url,
};

async function getCache(): Promise<RedisClientType> {
  if (!isReady) {
    redisClient = createClient({
      ...cacheOptions,
    });
    redisClient.on('error', (err) => console.error(`Redis Error: ${err}`));
    redisClient.on('connect', () => console.info('Redis connected'));
    redisClient.on('reconnecting', () => console.info('Redis reconnecting'));
    redisClient.on('ready', () => {
      isReady = true;
      console.info('Redis ready!');
    });
    await redisClient.connect();
  }

  redisClient.ping().then((result) => {
    console.log('Redis connection successful:', result);
  }).catch((error) => {
    console.error('Redis connection error:', error);
  });

  return redisClient;
}

export async function getFromCache(key: string): Promise<string | null> {
  const client = await getCache();
  const value = await client.get(key);
  return value;
}

export async function setToCache(key: string, value: string): Promise<void | string | null> {
  const client = await getCache();
  return client.set(key, value) as unknown as Promise<void | string | null>;
}

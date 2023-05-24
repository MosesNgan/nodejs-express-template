import express, { Request, Response } from 'express';
import { getFromCache, setToCache } from './services/cache';

const app = express();

app.get('/', async (req: Request, res: Response) => {
  try {
    const value = await getFromCache('homePageMessage');
    const homePageMessage = 'Home page is working :)';
    if ( value == homePageMessage) {
      console.log('Retrieved data from Redis cache:', value);
      return res.send(value);
    } else {

      await setToCache('homePageMessage', homePageMessage);
      console.log('Set data in Redis cache:', homePageMessage);
      return res.send(homePageMessage);
    }
  } catch (error) {
    console.error('Error accessing Redis cache:', error);
    return res.status(500).send('Internal Server Error');
  }
});

export default app;

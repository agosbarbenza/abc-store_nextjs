import { feedService } from '@/api/services/feed/feed.service'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;
    const data = await feedService.getProductById(id as string);
    if(data.id > 0){
      res.status(200).send(data);
    }else{
      res.status(404).json({ error: 'Product not found' });
    } 
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

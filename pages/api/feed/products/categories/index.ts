import { feedService } from '@/api/services/feed/feed.service';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
      const data = await feedService.getCategoryList();
      if(data.length > 0){
        res.status(200).send(data);
      }else{
        res.status(404).json({ error: 'No categories found' });
      }
    }catch(err){
      res.status(500).json({ error: 'Internal server error' });
    }
  
}
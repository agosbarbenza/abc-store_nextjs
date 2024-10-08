export interface PostDetailsInt {
    postId: string;
    account: string;
    imageUrl: string;
    hashtags: string[];
    postDate: string;
    caption: string;
    comments: number;
    likes: number;
    videoViewCount: number;
    videoUrl: string;
    assetType: string;
    imageType: string;
    rating: number;
    engagement: number;
    viewEngagement: number;
    [key: string]: any;
  }
  
  export interface PostDetailsProps {
    data: any;
    onClose: () => void;
  }
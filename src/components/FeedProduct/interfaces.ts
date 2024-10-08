export interface FeedPostProps {
    data: any;
    selectPost: (postId: string) => void;
    onClick: () => void;
  }
  
  export interface Data {
    likes: number;
    comments: number;
    views: number;
    videoViewCount: number;
  }
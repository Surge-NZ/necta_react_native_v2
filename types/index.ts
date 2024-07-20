export type TweetProps = {
    tweet: {
      id: string;
      user: {
        id: string;
        name: string;
        username: string;
        image: string;
      };
      createdAt: string;
      content: string;
      image?: string;
      numberOfComments: number;
      numberOfRetweets: number;
      numberOfLikes: number;
      impressions: number;
    };
  };
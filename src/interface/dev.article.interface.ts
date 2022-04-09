export interface IDevProps {
  id: number;
  title: string;
  positive_reactions_count: number;
  description: string;
  cover_image: string;
  created_at: string;
  url: string;
  user: {
    name: string;
    twitter_username: string;
    github_username: string;
    profile_image_90: string;
  };
}

export interface IReactPostProps {
  canonical_url: string;
  cover_image: string;
  created_at: string;
  description: string;
  social_image: string;
  tag_list: [string];
  title: string;
  url: string;
  user: {
    name: string;
    profile_image_90: string;
    website_url: string;
  };
}

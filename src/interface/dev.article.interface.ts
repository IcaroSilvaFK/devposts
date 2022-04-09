export interface IDevProps {
  type_of: string;
  id: number;
  title: string;
  readable_publish_date: string;
  public_reactions_count: number;
  positive_reactions_count: number;
  cover_image?: string;
  created_at: string;
  tag_list: [string];
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

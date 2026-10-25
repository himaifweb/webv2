export interface NewsDetail {
  description: string;
  cta_url: string;
}

export interface ActivityNewsItem {
  title: string;
  description: string;
  thumbnail_url: string;
  location_type: string;
  location_detail: string;
  registration_link: string;
  news: NewsDetail;
}

export interface PaginationProps {
  activePage: boolean;
  onClick: () => void;
}

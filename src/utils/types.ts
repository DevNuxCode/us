export interface Video {
  id: number;
  date: string;
  content: {
    rendered: string;
  };
  _links: {
    'wp:featuredmedia': Array<{
      href: string;
    }>;
  };
  acf: {
    name?: string;
    note?: string;
    bpm?: string;
    url?: string;
    url_dk: string;
  };
  imageUrl?: string;
}

export interface VideoCardProps {
  id: number;
  date: string;
  content: string;
  imageUrl: string;
  name?: string;
  note?: string;
  bpm?: string;
  url?: string;
  url_dk?: string;
}
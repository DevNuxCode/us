export interface Beat {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  acf: {
    url_yt: string;
    url_bs: string;
    note: string;
    bpm: string;
  };
  _links: {
    'wp:featuredmedia': Array<{
      href: string;
    }>;
  };
}

export interface Media {
  source_url: string;
}
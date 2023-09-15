export type Movie = {
    id: number;
    title: string;
    vote_average: number;
    media_type: string;
    release_date: string;
    overview: string;
    poster_path: string;
    sort_by:string;
    "vote_average.gte":number;
    "vote_count.gte": number
  };

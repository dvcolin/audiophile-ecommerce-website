export interface Seo {
  seo: {
    title: string;
    description: string | null;
  };
}

export type ApiResponse<QueryKey extends string, ReponseType> = {
  [key in QueryKey]: ReponseType;
};

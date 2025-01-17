export type UserStudies = UserStudy[];

export interface UserStudy {
  dataKey: string;
  name: string;
  explain: string;
  activeUser: number;
  isMarked: boolean;
}

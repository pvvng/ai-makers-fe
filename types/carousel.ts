export type ButtonData = {
  handler: () => void;
  type: "left" | "right";
}[];

export type BadgeType = "new" | "hot" | "recommend";

export interface CarouselData {
  type: BadgeType;
  title: string;
  content: string;
  dataKey: string;
}

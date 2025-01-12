export type ButtonData = {
  handler: () => void;
  type: "left" | "right";
}[];

export type BadgeType = "new" | "hot" | "recommend";
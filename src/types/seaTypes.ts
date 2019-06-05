export interface ISeaBlock {
  hasFire: boolean;
  hasShip: boolean;
  isCollision?: boolean;
}

export interface ICoordinates {
  x: number;
  y: number;
}

export type AutoShot = (
  seaToAttack: ISeaBlock[][],
  shipInProgressCoordinates: ICoordinates | null,
) => ICoordinates;

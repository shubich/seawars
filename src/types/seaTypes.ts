export interface ISeaBlock {
  hasFire: boolean;
  hasShip: boolean;
}

export interface ICoordinates {
  x: number;
  y: number;
}

export type AutoShot = (
  seaToAttack: ISeaBlock[][],
  shipInProgressCoordinates: ICoordinates | null,
) => ICoordinates;

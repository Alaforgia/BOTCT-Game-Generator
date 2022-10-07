export interface IGameTypes {
  _id: number;
  name: string;
  classes: IClassData[];
}

export interface IClassData {
  class_id: number;
  class_name: string;
  class_ability: string;
}

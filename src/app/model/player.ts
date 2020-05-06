import { IPosition } from './position';
import { ISchool } from './school';
export interface IPlayer {
  cfl_central_id: number;
  stats_inc_id: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  birth_date: string;
  birth_place: string;
  height: string;
  weight: number;
  lrookie_year: number;
  foreign_player: boolean;
  image_url: string;
  position: IPosition;
  school: ISchool;
}

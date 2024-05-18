interface IGame {
  id: string;
  whitePlayer: string;
  blackPlayer: string;
  moves: string[];
}
// not the best way
// export const games: IGame[] = [];

export class GameManager {
  games: IGame[] = [];
  constructor() {
    this.games = [];
  }

  addMove() {}

  addGame() {}
}

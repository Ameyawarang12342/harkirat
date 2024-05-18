"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
const store_1 = require("./store");
(0, logger_1.startLogger)();
setInterval(() => {
    store_1.games.push({
        id: Math.random().toString(),
        whitePlayer: "Gorra",
        blackPlayer: "Kalu",
        moves: ["e4", "e5"],
    });
}, 5000);

import { world } from "@minecraft/server";
import { transferPlayer } from "@minecraft/server-admin";

world.afterEvents.playerSpawn.subscribe(event => {
    const player = event.player;
    transferPlayer(player, { hostname: "108.175.12.25", port: 19132 });
});
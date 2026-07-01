const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
    console.log(`✅ Connecté en tant que ${client.user.tag}`);
});

client.on("error", console.error);

client.on("shardDisconnect", (event, id) => {
    console.log(`⚠️ Shard ${id} déconnecté (${event.code}).`);
});

client.on("shardReconnecting", (id) => {
    console.log(`🔄 Reconnexion du shard ${id}...`);
});

client.on("shardResume", (id, replayedEvents) => {
    console.log(`✅ Shard ${id} reconnecté (${replayedEvents} événements rejoués).`);
});

client.login(process.env.TOKEN);

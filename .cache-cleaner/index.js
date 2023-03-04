const { default: axios } = require("axios");

async function run() {
    await clean("https://purge.jsdelivr.net/gh/LittleLightForDestiny/littleLightData@HEAD/collaborators.json");
    await clean("https://purge.jsdelivr.net/gh/LittleLightForDestiny/littleLightData@HEAD/game_data.json");
    await clean("https://purge.jsdelivr.net/gh/LittleLightForDestiny/littleLightData@HEAD/popular_wishlists.json");
}

async function clean(url) {
    const result = await axios.get(url);
    console.log(result.data);
}

run();

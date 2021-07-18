const { default: axios } = require("axios");

async function run() {
    await axios.get("https://purge.jsdelivr.net/gh/LittleLightForDestiny/littleLightData/cache_test.json");
}

run();
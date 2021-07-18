const { default: axios } = require("axios");

async function run() {
    await clean("https://purge.jsdelivr.net/gh/LittleLightForDestiny/littleLightData/cache_test.json");
}

async function clean(url) {
    const result = await axios.get(url);
    console.log(result.data);
}

run();
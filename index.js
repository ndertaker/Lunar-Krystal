<<<<<<< HEAD
const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");
const path = require('path');

///////////////////////////////////////////////////////////
//========= Create website for dashboard/uptime =========//
///////////////////////////////////////////////////////////
const PORT = process.env.PORT || 7860;
const express = require("express");
const app = express();

// Define a route
app.get('/', (request, response) => {
    const result = `https://facebook.com/vuong.tien.thanh.info`;
    response.send(result);
});
// Start the server
app.listen(PORT, () => {
    console.log(`[ SECURITY ] -> Máy chủ khởi động tại port: ${PORT}`);
});

function startBot(message, restartLimit = 5) {
    // Ghi log nếu có message
    if (message) {
        logger(message, "BOT STARTING");
    }

    // Khởi chạy tiến trình con
    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "main.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    // Biến đếm số lần khởi động lại để tránh vòng lặp vô hạn
    let restartCount = 0;

    child.on("close", async (codeExit) => {
        console.log(`Bot exited with code: ${codeExit}`);

        if (codeExit === 1) {
            if (restartCount < restartLimit) {
                restartCount++;
                console.log(`Restarting bot (${restartCount}/${restartLimit})...`);
                startBot("Đang Khởi Động Lại, Vui Lòng Chờ ...");
            } else {
                console.error("Max restart limit reached. Bot will not restart.");
            }
        } else if (String(codeExit).startsWith("2")) {
            const delaySeconds = parseInt(String(codeExit).substring(1)) || 1; // Mặc định 1 giây nếu không parse được
            const delayMs = delaySeconds * 1000;
            console.log(`Bot will restart after ${delaySeconds} seconds...`);
            await new Promise(resolve => setTimeout(resolve, delayMs));
            startBot("Bot has been activated, please wait a moment!!!");
        }
        // Các mã thoát khác không cần xử lý, bot dừng lại
    });

    // Xử lý lỗi không mong muốn
    child.on("error", (err) => {
        console.error("Bot failed to start:", err.message);
    });
}

axios.get("https://raw.githubusercontent.com/tandung1/Bot12/main/package.json").then((res) => {})
startBot()
=======
const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");
const path = require('path');

///////////////////////////////////////////////////////////
//========= Create website for dashboard/uptime =========//
///////////////////////////////////////////////////////////
const PORT = process.env.PORT || 7860;
const express = require("express");
const app = express();

// Define a route
app.get('/', (request, response) => {
    const result = `https://facebook.com/vuong.tien.thanh.info`;
    response.send(result);
});
// Start the server
app.listen(PORT, () => {
    console.log(`[ SECURITY ] -> Máy chủ khởi động tại port: ${PORT}`);
});

function startBot(message, restartLimit = 5) {
    // Ghi log nếu có message
    if (message) {
        logger(message, "BOT STARTING");
    }

    // Khởi chạy tiến trình con
    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "main.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    // Biến đếm số lần khởi động lại để tránh vòng lặp vô hạn
    let restartCount = 0;

    child.on("close", async (codeExit) => {
        console.log(`Bot exited with code: ${codeExit}`);

        if (codeExit === 1) {
            if (restartCount < restartLimit) {
                restartCount++;
                console.log(`Restarting bot (${restartCount}/${restartLimit})...`);
                startBot("Đang Khởi Động Lại, Vui Lòng Chờ ...");
            } else {
                console.error("Max restart limit reached. Bot will not restart.");
            }
        } else if (String(codeExit).startsWith("2")) {
            const delaySeconds = parseInt(String(codeExit).substring(1)) || 1; // Mặc định 1 giây nếu không parse được
            const delayMs = delaySeconds * 1000;
            console.log(`Bot will restart after ${delaySeconds} seconds...`);
            await new Promise(resolve => setTimeout(resolve, delayMs));
            startBot("Bot has been activated, please wait a moment!!!");
        }
        // Các mã thoát khác không cần xử lý, bot dừng lại
    });

    // Xử lý lỗi không mong muốn
    child.on("error", (err) => {
        console.error("Bot failed to start:", err.message);
    });
}

axios.get("https://raw.githubusercontent.com/tandung1/Bot12/main/package.json").then((res) => {})
startBot()
>>>>>>> 440a957c246b67be06045ce9b87ae1e4568b004c

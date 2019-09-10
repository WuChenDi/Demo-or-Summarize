const express = require("express");

// 本次 http 请求实例
const app = express();

app.use((req, res, next) => {
    console.log("请求开始...", req.method, req.url);
    next();
});

app.use((req, res, next) => {
    // 假设在处理 cookie
    req.cookie = {
        userId: "abc123"
    };
    next();
});

app.use((req, res, next) => {
    // 假设处理 post data
    // 异步
    setTimeout(() => {
        req.body = {
            a: 100,
            b: 200
        };
        next();
    });
});

app.use("/api", (req, res, next) => {
    console.log("处理 /api 路由");
    next();
});

app.get("/api", (req, res, next) => {
    console.log("get /api 路由");
    next();
});

app.post("/api", (req, res, next) => {
    console.log("post /api 路由");
    next();
});

app.get("/api/get-cookie", (req, res, next) => {
    console.log("get /api/get-cookie");
    res.json({
        error: 0,
        data: req.cookie
    });
});

app.post("/api/get-post-data", (req, res, next) => {
    console.log("post /api/get-post-data");
    res.json({
        error: 0,
        data: req.body
    });
});

app.use((req, res, next) => {
    console.log("处理 404");
    res.json({
        error: -1,
        msg: "404 not fount"
    });
});

app.listen(3000, () => {
    console.log("server is running no port 3000");
});

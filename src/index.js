const express = require('express');
const http = require('http'); // httpモジュールをインポート
const app = express();
const port = 3000;

// sys-db-be コンテナのAPIエンドポイント
const apiHost = 'sys-db-be';
const apiPort = 80;
const apiPath = '/v1/user';

app.get('/', (req, res) => {
    // オプションの設定
    const options = {
        hostname: apiHost,
        port: apiPort,
        path: apiPath,
        method: 'GET'
    };

    // HTTPリクエストを送信
    const apiReq = http.request(options, apiRes => {
        let data = '';

        // データを受け取るたびに実行される
        apiRes.on('data', chunk => {
            data += chunk;
        });

        // 全てのデータを受け取った後に実行される
        apiRes.on('end', () => {
            res.send(data);
        });
    });

    // エラーハンドリング
    apiReq.on('error', error => {
        console.error(error);
        res.status(500).send('APIリクエスト中にエラーが発生しました');
    });

    // リクエストを終了
    apiReq.end();
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

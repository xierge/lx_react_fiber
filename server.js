/*
 * @Date: 2023-02-26 16:01:36
 * @LastEditors: lipengxi 2899952565@qq.com
 * @LastEditTime: 2023-02-26 17:04:37
 * @FilePath: /lx_react_fiber/server.js
 * @description:
 */
import express from "express";

const app = express();

app.use(express.static("dist"));

const template = `
    <html lang="en">
        <head>
           <title>lx-react-fiber</title>
        </head>
        <body>
          <div id="root"></div>
          <script src="bundle.js"></script>
        </body>
    </html>
`;

app.get("*", (req, res) => {
  res.send(template);
});

app.listen(6477, () => {
  console.log(`http://localhost:6477`);
});

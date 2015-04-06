My Site
===

### [http://www.i-nasu.com](http://www.i-nasu.com)

- angular-tableのbower.jsonに `main` の項目が抜けているので追加(これがないとmainbowerfileでpathが取得できない)
  - `"main": "dist/angular-table.js",`
- `app/js/config/const.js.org` をコピーして`const.js` を作成
  `YOUR_TOKEN` を書き換えてください
- `gulp` でサーバーが立ち上がるので `localhost:8000`にアクセスしてください
- `gulp build` でbuildフォルダが作成され、jsとcssが連結&縮小されたものが作成されます

#### 動くまでの流れ
```bash
npm install
bower install
vim vim app/bower_components/at-table/bower.json
cp -p app/js/config/const.js.org app/js/config/const.js
vim app/js/config/const.js
gulp
```
FROM node:20-alpine

# ARGでルートパスを指定し、デフォルトでは/src
ARG root_path=/src

# 作業ディレクトリを設定
WORKDIR $root_path

# タイムゾーンを設定
ENV TZ Asia/Tokyo

# package.json と package-lock.json をコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# アプリケーションを起動
CMD ["npm", "start"]

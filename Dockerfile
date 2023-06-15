#指定基础镜像，node版本，满足宿主环境
FROM node:19-alpine as builder
WORKDIR '/app'

COPY package.json .
RUN yarn

COPY . .
CMD yarn build

#运行阶段
FROM nginx
COPY --from=builder ./app/dist /usr/share/nginx/html
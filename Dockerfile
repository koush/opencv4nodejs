FROM koush/node-opencv

WORKDIR /
COPY . opencv4nodejs

ARG NODE_PRE_GYP_GITHUB_TOKEN

WORKDIR /opencv4nodejs
ENV SKIP_OPENCV4NODEJS_INSTALL=true
RUN npm install
RUN npm run build
RUN ./check.js
RUN npm run node-pre-gyp-publish

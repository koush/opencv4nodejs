# docker buildx create --name mybuild
# docker buildx use mybuild
docker buildx build --build-arg NODE_PRE_GYP_GITHUB_TOKEN=$GITHUB_TOKEN --platform linux/amd64,linux/arm64,linux/armhf .

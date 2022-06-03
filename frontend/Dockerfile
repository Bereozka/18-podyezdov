# start from an official image
FROM node:10

# arbitrary location choice: you can change the directory
RUN mkdir -p /opt/services/reactapp/src
WORKDIR /opt/services/reactapp/src

# install our dependencies
# we use --system flag because we don't need an extra virtualenv
COPY . /opt/services/reactapp/src

ENTRYPOINT ["sh", "/opt/services/reactapp/src/entrypoint.sh"]

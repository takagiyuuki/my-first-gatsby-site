#### base ####
# cache our node version for installing later
FROM node:20.5.0-slim  AS node
FROM ubuntu:focal-20220531 as base
ENV NODE_ENV=production
# Avoid running nodejs process as PID 1 (use tini)
# You may also need development tools to build native npm addons:
# apt-get install gcc g++ make
RUN apt-get update \
    && apt-get -qq install -y --no-install-recommends \
    tini \
    && rm -rf /var/lib/apt/lists/*
EXPOSE 3000

# new way to get node, let's copy in the specific version we want from a docker image
# this avoids depdency package installs (python3) that the deb package requires
COPY --from=node /usr/local/include/ /usr/local/include/
COPY --from=node /usr/local/lib/ /usr/local/lib/
COPY --from=node /usr/local/bin/ /usr/local/bin/
# reset symlinks
RUN corepack disable && corepack enable

# create node user and group, then create app dir
RUN groupadd --gid 1000 node \
    && useradd --uid 1000 --gid node --shell /bin/bash --create-home node \
    && mkdir /workspace \
    && chown -R node:node /workspace

WORKDIR /workspace
USER node
COPY --chown=node:node package*.json ./
RUN npm ci && npm cache clean --force

#### dev ####
# no source to be added, and assumes bind mount
FROM base as dev
ENV NODE_ENV=development
ENV PATH=/app/node_modules/.bin:$PATH
RUN npm install && npm install -g gatsby-cli && npm cache clean --force
CMD [ "gatsby", "develop" ]

#### source ####
FROM base as source
COPY --chown=node:node . .

#### prod ####
FROM source as prod
ENTRYPOINT ["/usr/bin/tini", "--"]
CMD ["gatsby", "build" ]

FROM node:8.7.0

ENV HOME=/node
WORKDIR $HOME

# Cache and install npm deps
COPY package.json $HOME
RUN yarn

# Copy application to container and build dist
COPY . $HOME
RUN yarn run build

# Copy entrypoint script required by docker compose during runtime
EXPOSE 4000
COPY ./docker/node/entrypoint.sh /
CMD ["/entrypoint.sh"]

FROM node:8.7.0

ENV HOME=/node
WORKDIR $HOME

# Cache and install npm deps
COPY package.json $HOME
# Copy yarn lock over to lock in npm versions
# otherwise, there will be inconsistencies between
# local and remote
COPY yarn.lock $HOME
# Copy semantic json settings for semantic-ui file
COPY semantic.json $HOME
# Install node_modules
RUN yarn

# Copy application to container.
# Note: 'dist' folder is in dockerignore
COPY . $HOME

# Build 'dist' folder in the container instead
RUN yarn run build

# Copy entrypoint script required by docker compose during runtime
EXPOSE 4000

# Run script
# Note: during debugging, without a never-ending script, the container will just end
COPY ./docker/node/entrypoint.sh /
CMD ["/entrypoint.sh"]

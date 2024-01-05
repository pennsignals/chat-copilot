FROM mcr.microsoft.com/dotnet/sdk:8.0 as base
RUN \
    apt-get update \
    && apt-get install -y curl jq zip azure-cli \
    && apt-get remove cmdtest yarn \
    && curl -sL https://deb.nodesource.com/setup_20.x | bash - && apt-get install -yq nodejs build-essential \
    && npm install -g yarn

FROM base as src
WORKDIR /tmp
COPY . .
WORKDIR /tmp/scripts/deploy

FROM src as deploy-azure
CMD ./env.deploy-azure.sh

FROM src as deploy-webapi
CMD ./env.deploy-webapi.sh

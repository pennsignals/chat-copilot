#!/usr/bin/env bash
set -euxo pipefail

set +x
source development.env set
set -x

bash ./package-webapi.sh
az login --use-device-code
bash ./deploy-webapi.sh \
  --subscription "${SUBSCRIPTION_ID}" \
  --resource-group "${RESOURCE_GROUP}" \
  --deployment-name "${DEPLOYMENT_NAME}"

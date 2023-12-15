#!/usr/bin/env bash
set -euxo pipefail

set +x
source development.env set
set -x

bash ./package-plugins.sh
bash ./deploy-plugins.sh \
  --subscription "${SUBSCRIPTION_ID}" \
  --resource-group "${RESOURCE_GROUP}" \
  --deployment-name "${DEPLOYMENT_NAME}"

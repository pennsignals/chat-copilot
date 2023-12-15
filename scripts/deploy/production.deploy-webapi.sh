#!/usr/bin/env bash
set -euxo pipefail

set +x
source production.env set
set -x

bash ./deploy-webapi.sh \
  --subscription "${SUBSCRIPTION_ID}" \
  --resource-group "${RESOURCE_GROUP}" \
  --deployment-name "${DEPLOYMENT_NAME}"

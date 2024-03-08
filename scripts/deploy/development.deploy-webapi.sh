#!/usr/bin/env bash
set -euxo pipefail

set +x
source development.env set
set -x

./deploy-webapi.sh \
  --subscription "${SUBSCRIPTION_ID}" \
  --resource-group "${RESOURCE_GROUP}" \
  --deployment-name "${DEPLOYMENT_NAME}"

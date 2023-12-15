#!/usr/bin/env bash
set -euxo pipefail

set +x
source development.env set
set -x

bash ./package-memorypipeline.sh
bash ./deploy-memorypipline.sh \
  --subscription "${SUBSCRIPTION_ID}" \
  --resource-group "${RESOURCE_GROUP}" \
  --deployment-name "${DEPLOYMENT_NAME}"

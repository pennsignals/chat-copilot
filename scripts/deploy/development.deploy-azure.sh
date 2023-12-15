#!/usr/bin/env bash
set -euxo pipefail

set +x
source development.env set
set -x

bash ./deploy-azure.sh \
  --deployment-name "${DEPLOYMENT_NAME}" \
  --resource-group "${RESOURCE_GROUP}" \
  --region "${REGION}" \
  --ai-service "${AI_SERVICE}" \
  --client-id "${BACKEND_CLIENT_ID}" \
  --frontend-client-id "${FRONTEND_CLIENT_ID}" \
  --subscription "${SUBSCRIPTION_ID}" \
  --tenant-id "${TENANT_ID}"

#  --ai-service-key "${AI_KEY}" \
#  --ai-endpoint "${AI_ENDPOINT}" \

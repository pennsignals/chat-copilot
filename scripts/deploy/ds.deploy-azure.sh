#!/usr/bin/env bash
set -euxo pipefail

set +x
source ../../envs/ds.env set
set -x

az login --use-device-code
source ./env.deploy-azure.sh

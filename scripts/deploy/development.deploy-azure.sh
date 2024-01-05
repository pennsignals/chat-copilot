#!/usr/bin/env bash
set -euxo pipefail

set +x
source ../../envs/development.env set
set -x

az login --use-device-code
source ./env.deploy-azure.sh

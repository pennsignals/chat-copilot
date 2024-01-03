#!/usr/bin/env bash
set -euxo pipefail

set +x
source ../../envs/development.env set
set -x

source ./package-memorypipeline.sh
az login --use-device-code
source ./env.deploy-memorypipline.sh

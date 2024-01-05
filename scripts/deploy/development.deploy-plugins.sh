#!/usr/bin/env bash
set -euxo pipefail

set +x
source ../../envs/development.env set
set -x

source ./package-plugins.sh
az login --use-device-code
source ./env.deploy-plugins.sh

#!/usr/bin/env bash
set -euxo pipefail

set +x
source ../../envs/staging.env set
set -x

source ./env.deploy-azure.sh

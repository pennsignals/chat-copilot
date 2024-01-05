#!/usr/bin/env bash
set -euxo pipefail

set +x
source ../../envs/production.env set
set -x

source ./env.deploy-webapi.sh

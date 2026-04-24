#!/bin/sh
set -eu
KEYS_SRC="${SSH_AUTHORIZED_KEYS_PATH:-/run/ssh-keys/authorized_keys}"
if [ ! -r "$KEYS_SRC" ] || [ ! -s "$KEYS_SRC" ]; then
  echo "dev-workstation: key-only SSH requires a mounted authorized_keys file." >&2
  echo "  Create .dev/authorized_keys with your public key (see .dev/authorized_keys.example), or set" >&2
  echo "  DEV_WORKSTATION_AUTHORIZED_KEYS in .env to another path." >&2
  exit 1
fi
install -d -m 700 -o devuser -g devuser /home/devuser/.ssh
install -m 600 -o devuser -g devuser -- "$KEYS_SRC" /home/devuser/.ssh/authorized_keys
exec /usr/sbin/sshd -D -e

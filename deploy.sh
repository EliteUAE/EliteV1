#!/bin/bash
# ─────────────────────────────────────────────────────────────
# Elite Partners — Hostinger VPS Deploy Script
# Run this ON YOUR LOCAL MACHINE (not the VPS)
# Usage: ./deploy.sh user@your-vps-ip
# ─────────────────────────────────────────────────────────────
set -e

VPS=$1
if [ -z "$VPS" ]; then
  echo "Usage: ./deploy.sh root@YOUR_VPS_IP"
  exit 1
fi

echo "→ Building production bundle..."
npm run build

echo "→ Uploading dist/ to VPS..."
ssh "$VPS" "mkdir -p /var/www/elitepartners"
rsync -avz --delete dist/ "$VPS:/var/www/elitepartners/dist/"

echo "→ Uploading nginx config..."
scp nginx.conf "$VPS:/etc/nginx/sites-available/elitepartners"

echo "→ Enabling nginx site..."
ssh "$VPS" "
  ln -sf /etc/nginx/sites-available/elitepartners /etc/nginx/sites-enabled/elitepartners
  nginx -t && systemctl reload nginx
"

echo "✓ Deploy complete! Site is live."

# Deploying Elite Partners to Hostinger VPS

## One-time VPS setup (SSH into your VPS first)

```bash
# 1. Install nginx
apt update && apt install -y nginx

# 2. Create site directory
mkdir -p /var/www/elitepartners/dist

# 3. Copy nginx config
cp nginx.conf /etc/nginx/sites-available/elitepartners
ln -s /etc/nginx/sites-available/elitepartners /etc/nginx/sites-enabled/elitepartners

# 4. Edit your domain in the config
nano /etc/nginx/sites-available/elitepartners
# Replace YOUR_DOMAIN.com with your actual domain

# 5. Test and start nginx
nginx -t
systemctl enable nginx
systemctl start nginx
```

## Deploy the site

**From your local machine:**

```bash
# Clone the branch
git clone https://github.com/eliteuae/elitev1
cd elitev1
git checkout claude/install-uiux-pro-max-skill-djcia6

# Install deps and build
npm install
npm run build

# Upload dist to VPS
rsync -avz --delete dist/ root@YOUR_VPS_IP:/var/www/elitepartners/dist/

# Reload nginx
ssh root@YOUR_VPS_IP "systemctl reload nginx"
```

Or use the one-command deploy script:
```bash
./deploy.sh root@YOUR_VPS_IP
```

## Set up SSL (free with Certbot)

```bash
# On your VPS
apt install -y certbot python3-certbot-nginx
certbot --nginx -d YOUR_DOMAIN.com -d www.YOUR_DOMAIN.com
```

## Point your domain

In Hostinger DNS panel, add:
| Type | Host | Value |
|------|------|-------|
| A | @ | YOUR_VPS_IP |
| A | www | YOUR_VPS_IP |

## Re-deploy after changes

Just run again from local:
```bash
npm run build
rsync -avz --delete dist/ root@YOUR_VPS_IP:/var/www/elitepartners/dist/
```

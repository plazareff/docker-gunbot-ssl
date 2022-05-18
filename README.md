## Docker - Gunbot - Nginx - SSL

This repo allows to install Gunbot on a server along with Nginx as a reverse proxy and Let's Encrypt SSL certificates auto-generation and renewal.

### Requirements

For this to work, you will need:
- A server (cheap VPS will do but with a rather heavy load, around 1.6, Debian/Ubuntu is fine)
- Docker installed including `docker-compose` (many hosting companies provide it as an option when ordering)
- A DNS entry pointing to it (as generic domain names provided by the hosting company will most likely fail to get SSL certificates due to the limited number of daily certificate requests for a given domain allowed by Let's Encrypt)

#### Alternative - local use

If you just want to test/run Gunbot on your local computer with [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed, you can simply use the docker-compose-local.yml file.
```
docker-compose -f docker-compose-local.yml up -d
```

Once the containers built and running, you can connect at http://localhost:5000

Note: the Time Zone is set directly in this file and defaults to `Europe/Berlin`, edit as appropriate.

### Server Installation

1. Clone or download and uncompress this repository in userspace (root not needed, although some permission issues might arise)
2. Copy or rename the `DOTenv` file to `.env` and fill it with correct information:
   - `HOST_FQDN` is your specific (sub)domain name. Do **not** use your hosting company generic fqdn.
   - `HOST_EMAIL` is an email needed for SSL certificate generation
   - `HOST_TIMEZONE` is the Time Zone, defaults to `Europe/Berlin`
3. Copy or rename the file `mounts/default-config.js` to `mounts/config.js` OR copy your own `config.js` in `/mounts` if you already have one.

### First Run

```
docker-compose build && docker-compose up -d
```

Should do it.

Please note that this first run may take some time as Docker will download the latest version of Gunbot. Also, the SSL certificates generation may take a few minutes.

You should then be able to connect to:
https://your-domain-as-set-in.env

### Data persistence

Several Docker Volumes are used to ensure that your data will be kept after a server or Docker restart.

Should you need to create a backup of the Docker volumes, please refer to [Docker Documentation](https://docs.docker.com/storage/volumes/#back-up-a-volume).

### Updating Gunbot

When a new version is released, simply stop the running instance, remove the gunbot container and rebuild it.

```
docker-compose stop
docker container rm gunbot
docker-compose build && docker-compose up -d
```
### Visualising Gunbot Output

The most convenient way is to use Gunbot's GUI. However, you may also access the logs from terminal.

```
./console.sh
```

Which actually is a simple shortcut to:

```
docker logs -f gunbot
```

Be aware that this command will spit out all of previous logs, then again the GUI is your best friend.

### Using multiple instances

Should you need to run multiple instances of Gunbot, you will need a specific domain name or subdomain for each one pointing to your server.

Then, simply copy/paste the gunbot service inside the `docker-compose.yml` file and adapt the service name, the container_name, the environment/VIRTUAL_HOST params as needed.

**:warning: You will also have to set distinct mounts and volumes for each additional instance.**

Note: You can also add other apps than Gunbot in this way.

### Fine tuning nginx

In the unlikely event you need to fine tune nginx, you can add directives in the `/mounts/nginx_custom.conf` file.

Please note that these additional directives will be applied to all served domains if you have set more than one.

### Troubleshooting

Should you need to manually inspect/edit stuff in the containers (not recommended), you can use the provided `login.sh` script to ssh into the gunbot container.
It actually just contains the command:

```
docker exec -i -t -u root gunbot /bin/bash
```
### Thanks!

This would have not been made possible without:
- [Nginx Proxy](https://github.com/nginx-proxy/nginx-proxy)
- [Acme Companion](https://github.com/nginx-proxy/acme-companion)
- [Magicdude4eva](https://github.com/magicdude4eva/docker-gunbot) (Gunbot Docker Edition for Synology NAS)

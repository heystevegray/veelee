- [veelee](#veelee)
  - [Dropbox](#dropbox)
    - [Bad](#bad)
    - [Good](#good)
  - [YouTube Shorts](#youtube-shorts)
    - [Bad](#bad-1)
    - [Good](#good-1)
  - [Docker](#docker)

# veelee

## Dropbox

Convert Dropbox shared links to serve user content directly.

### Bad

https://`www.dropbox.com`/scl/fi/vbzkm68k0td7wk3u5vsbl/hello.mp4

### Good

https://`dl.dropboxusercontent.com`/scl/fi/vbzkm68k0td7wk3u5vsbl/hello.mp4

## YouTube Shorts

Convert YouTube Shorts to their Youtube Video links.

### Bad

https://`youtube.com/shorts`/wk-SVfVuBng?si=EU25yaBDiBdD0Ul8

### Good

https://`www.youtube.com/watch?v=`wk-SVfVuBng

## Docker

```sh
# Build the docker image:
docker build -t remix-nginx-docker .

# Remove any existing container with the same name:
docker rm -f remix-nginx-docker-container

# Run the docker container:
docker run -p 4173:4173 --name remix-nginx-docker-container remix-nginx-docker
```

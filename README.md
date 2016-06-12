# nci-gogs-webhook

[gogs](https://gogs.io/) webhook plugin for [nci](https://github.com/node-ci/nci)

## Dependencies

[nci-express](https://github.com/fleg/nci-express)

## Installation

```sh
npm install nci-gogs-webhook
```

## Usage

Add this plugin to the `plugins` section at server config
```yml
plugins:
    - nci-gogs-webhook
```
after that you can set gogs webhook at project config
```yml
webhooks:
    gogs:
        secret: '123456'
```
plugin will listen `POST /webhooks/:projectName/gogs/123456` route.

## License

[The MIT License](https://raw.githubusercontent.com/fleg/nci-gogs-webhook/master/LICENSE)

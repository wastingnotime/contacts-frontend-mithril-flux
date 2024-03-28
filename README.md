# contacts-frontend-mithril-flux

Part of contacts project that aim for a benchmark thought technologies.

## what is it for?

This project validates:
* frontend
* mithriljs
* flux


## depencencies
* docker 25+
* nvm 0.39+

## getting started

open another terminal and run the backend for this project
```
docker run -p 8010:8010 wastingnotime/contacts-backend:latest
```

set node version (v21+)
```
nvm use
```

install deps
```
npm i
```

start app
```
npm start
```

* just go to your browser on http://localhost:1234


## validating docker image locally

build
```
docker build --tag contacts.frontend.mithril.flux .
```

run
```
docker run -p 80:80 contacts.frontend.mithril.flux
```

## some tips

### upgrade node packages

verify outdated packages
```
npm outdated
```
install new version of outdated package
```
npm install <package>@latest
```
if npm is older use
```
nvm install-latest-npm
```
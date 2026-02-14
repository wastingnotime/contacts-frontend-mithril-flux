# contacts-frontend-mithril-flux


**contacts-frontend-mithril-flux** is part of "contacts" project that is an initiative where we try to explore frontend and backend implementations in order to better understand it cutting-edge features. This repository presents a mithriljs based frontend application.

## status

This repository belongs to the Contacts reference initiative started in 2020.

Its purpose was to understand how different stacks shape design decisions around the same domain model.

As of 2026, this project is frozen.

The exploration phase has been completed.  
My current focus is depth, invariants, and system coherence rather than stack comparison.

This code remains as historical reference.

## stack
* mithriljs
* flux

## features
* small footprint


## depencencies
* docker 25+
* nvm 0.39+

## get started (linux only)

### execute from source code 

as a prerequisite it is necessary to start the backend application

open another terminal and run the backend for this project
```
docker run -p 8010:8010 wastingnotime/contacts-backend-go-echo
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
docker build --tag contacts-frontend-mithril-flux .
```

run
```
docker run -p 80:80 contacts-frontend-mithril-flux
```
* the test above do not work fully, it is just to show if the nginx server as responding accordly

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

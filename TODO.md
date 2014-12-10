Apologies, this probably won’t make any sense to anyone but Jake for right now.

# MVP
## TODO
- https://github.com/npm/npm/blob/master/doc/cli/npm-version.md
- https://github.com/npm/npm/blob/master/doc/misc/npm-registry.md
- https://github.com/npm/npm/blob/master/doc/misc/npm-developers.md
- https://github.com/npm/npm/blob/master/doc/misc/npm-scripts.md
- assignments are resolved top to bottom through the registries
- keep tarballs in a branch, allow deprecation to clean up space
- existing commands to docs
- resubmit with version history
- use gist for reading assignment
- have a Photoshop type
- versions: in config, in folder name
- when I change version, becomes not due, shows in status
- Copy code for line commenting, include link
- Option to auto create git repo, with paper trail that it wasn't created by student
- Status: Excellent, Satisfactory, Unsatisfactory, Incomplete
- sync -> publish, sync fetches student work
- hw status show folder, give option to open
- Move instructor commands to "plugin" a la ruby-build
- Allow work on assignment on a branch, then cut a beta tag
- https://www.npmjs.com/package/retry
- array of registries to share
- hub for auth flow
- ini?
- assignments prefix config
- current class config
- Explain why a single git repo for registry
- Anatomy: sha + tarball

## Overview
https://github.com/npm/npm/blob/master/doc/cli/npm.md
homework is inspired by npm

## homework-publish
uses homework.json in current directory
only works on master
bump version in json
publish to API, with SHA
detect difference between published version and the repo

publish should work for multiple

how to deal with “night before” publish without pull request

## demi
- due date
- autopopulate teaching journals from keywords

## validators
- Check components directories vs. config (bower, npm) to make sure all installed components are saved to json

# Someday
## TODO
- Assignments should be CC Non Commercial
- open, browse a la https://github.com/npm/npm/blob/master/doc/cli/npm-docs.md or hub browse
- https://github.com/npm/npm/blob/master/doc/cli/npm-ls.md
- https://github.com/npm/npm/blob/master/doc/cli/npm-cache.md
- https://github.com/npm/npm/blob/master/doc/cli/npm-unpublish.md
- https://github.com/npm/npm/blob/master/doc/files/npm-folders.md
https://github.com/npm/npm/blob/master/doc/cli/npm-view.md

## Config options
See npm-config(7)
- ca*
- fetch-retry and friends
- cache and friends
- color
- depth
- git
- https-proxy
- key
- init-*
- local-address
- loglevel
- logstream
- proxy
- rollback
- spin
- strict-ssl
- unicode
- user-agent
- viewer
- umask
The Anatomy of an Assignment
====================================

## What is an assignment

An assignment is:

* a) a folder containing resources described by a .homework.json file
* b) a gzipped tarball containing (a)
* c) a url that resolves to (b)
* d) a `<name>@<version>` that is published on the registry with (c)
* e) a `<name>@<tag>` that points to (d)
* f) a `<name>` that has a "latest" tag satisfying (e)

Also, it is likely but not necessary that the following are true:
* 1) The assignment data for a registry is stored in a single git repository
* 2) Each assignment is a subdirectory of a (1)

*TODO*: Where are the tarballs stored?

## The .homework.json File

You need to have a `.homework.json` file in the root of your project to do
much of anything with homework.  That is basically the whole interface.

See [Files: .homework.json](../files/homework.json.md) for details about what goes in that file.

You can use `homework init` in the root of your assignment in order to get you
started with a pretty basic .homework.json file.  See [Command: init](../commands/init.md) for
more info.

## Keeping files *out* of your assignment

Use a `.gitignore` file to keep stuff out of your assignment.

By default, the following paths and files are ignored, so there's no
need to add them to `.gitignore` explicitly:

* `.*.swp`
* `._*`
* `.DS_Store`
* `.git`
* `.hg`
* `.lock-wscript`
* `.svn`
* `.wafpickle-*`
* `CVS`
* `npm-debug.log`
* `node_modules`

The following paths and files are necessary, so adding them to `.gitignore`
will prevent you from publishing your assignment.

* `.homework.json`
* `README.md`

## Create a User Account

Create a user with the adduser command.  It works like this:

    homework adduser

and then follow the prompts.

This is documented better in [Commands: adduser](../commands/adduser.md).

## Publish your assignment

This part's easy.  In the root of your folder, do this:

    homework publish

You can give publish a path to a folder.

Note that pretty much **everything in that folder will be exposed**
by default.  So, if you have secret stuff in there, use a
`.gitignore` file to list out the globs to ignore, or publish
from a fresh checkout.

The Anatomy of Homework
=======================

## The assignment ecosystem consists of the following

- a) a `git` repository containing one or more assignments
- b) a subdirectory of (a) containing resources described by a .homework.json file
- c) a gzipped tarball containing (b)
- d) a url that resolves to (c)
- e) a path, relative to the root of (a), resolving to (b)
- f) a `git` url that, when cloned and combined with (e), results in (b)
- g) a `<name>@<version>` that is published on the registry with (d), (e), and (f)

Git urls can be of the form:

    git://github.com/user/project.git#commit-hash
    git+ssh://user@hostname:project.git#commit-hash
    git+http://user@hostname/project/blah.git#commit-hash
    git+https://user@hostname/project/blah.git#commit-hash

The `commit-hash` is the unique sha for a single commit. Tags and branches are
not permitted. `homework publish` will fail if the `git` url is invalid.

## The .homework.json File

You need to have a `.homework.json` file in the root of your project to do
much of anything with homework.  That is basically the whole interface.

See [Files: .homework.json](../files/homework.json.md) for details about what goes in that file.

You can use `homework init` in the root of your assignment in order to get you
started with a pretty basic .homework.json file.  See [Command: init](../commands/init.md) for
more info.

## Keeping files *out* of your assignment

It is highly recommended that certain files are ignored from the assignments
repositories by adding them to `.gitignore`.

* `.*.swp`
* `._*`
* `.DS_Store`
* `.git` (but not `/.git`, obviously)
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

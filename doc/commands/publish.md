publish -- Publish an assignment
================================

## SYNOPSIS

    npm publish <folder> [--tag <tag>]

## DESCRIPTION

Publishes an assignment to the registry so that it can be installed by name. See
[Guide: Anatomy of an Assignment](../guides/anatomy.md) for details on what's included in the published assignment, as
well as details on how the assignment is built.

* `<folder>`:
  A folder containing a .homework.json file

* `[--tag <tag>]`
  Registers the published package with the given tag, such that the class'
  assignments list can indicate this tag rather than the version number.
  By default, `homework publish` updates the `latest` tag.

Fails if the package name and version combination already exists in
the specified registry.

Once a package is published with a given name and version, that
specific name and version combination can never be used again, even if
it is removed with npm-unpublish(1).

# TODO

- Runs homework-validate to prevent duplicate names
- Which registry?

By default npm will publish to the public registry. This can be overridden by
specifying a different default registry or using a `npm-scope(7)` in the name
(see `package.json(5)`).

The following paths and files are necessary, so adding them to `.gitignore`
will prevent you from publishing your assignment.

* `.homework.json`
* `README.md`


tag -- Tag a published version
==============================

## SYNOPSIS

    homework tag <name>@<version> [<tag>]

## DESCRIPTION

Tags the specified version of the assignment with the specified tag, or the
`--tag` config if not specified.

A tag can be used when referencing assignments as a reference to a version instead
of using a specific version number:

Publishing a package always sets the "latest" tag to the published version.

# TODO
- Warn that updating a tag could wreak havok if others are pointing at that tag

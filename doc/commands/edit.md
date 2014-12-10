edit -- Edit an assignment
==========================

## SYNOPSIS

    homework edit <name>[@<version>]

## DESCRIPTION

Opens the assignment folder in the default editor (or whatever you've
configured as the homework `editor` config -- see [Guide: Config](../guides/config.md).)

## CONFIGURATION

### editor

* Default: `EDITOR` environment variable if set, or `"vi"` on Posix,
  or `"notepad"` on Windows.
* Type: path

The command to run for `homework edit` or `homework config edit`.

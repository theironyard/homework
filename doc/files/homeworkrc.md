homeworkrc -- The homework config file
======================================

## DESCRIPTION

homework gets its config settings from the command line, environment
variables, and `homeworkrc` file.

The `homework config` command can be used to update and edit the contents
of the user homeworkrc file.

For a list of available configuration options, see [Guide: Config](../guides/config.md).

## FILES

The three relevant files are:

* per-project config file (/path/to/my/project/.homeworkrc)
* per-user config file (~/.homeworkrc)
* homework builtin config file (/path/to/homework/share/homeworkrc)

All homework config files are an ini-formatted list of `key = value`
parameters.  Environment variables can be replaced using
`${VARIABLE_NAME}`. For example:

    prefix = ${HOME}/Assignments

Each of these files is loaded, and config options are resolved in
priority order.  For example, a setting in the userconfig file would
override the setting in the builtin config file.

### Per-project config file

When working locally in a project, a `.homeworkrc` file in the root of the
project (ie, a sibling of `.homework.json`) will set
config values specific to this project.

### Per-user config file

`$HOME/.homeworkrc` (or the `userconfig` param, if set in the environment
or on the command line)

### Built-in config file

`path/to/homework/itself/share/homeworkrc`

This is an unchangeable "builtin" configuration file that homework keeps
consistent across updates.

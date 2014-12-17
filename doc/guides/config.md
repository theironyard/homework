Guide: Config
=============

## DESCRIPTION

homework gets its configuration values from 6 sources, in this priority:

### Command Line Flags

Putting `--foo bar` on the command line sets the `foo` configuration
parameter to `"bar"`.  A `--` argument tells the cli parser to stop
reading flags.  A `--flag` parameter that is at the *end* of the
command will be given the value of `true`.

### Environment Variables

Any environment variables that start with `homework_config_` will be
interpreted as a configuration parameter.  For example, putting
`homework_config_foo=bar` in your environment will set the `foo`
configuration parameter to `bar`.  Any environment configurations that
are not given a value will be given the value of `true`.  Config
values are case-insensitive, so `HOMEWORK_CONFIG_FOO=bar` will work the
same.

### homeworkrc Files

The three relevant files are:

* per-project config file (/path/to/my/project/.homeworkrc)
* per-user config file (~/.homeworkrc)
* homework builtin config file (/path/to/homework/share/homeworkrc)

See [Files: homeworkrc](../files/homeworkrc.md) for more details.

### Default Configs

A set of configuration parameters that are internal to homework, and are
defaults if nothing else is specified.

## Per-Package Config Settings

When running scripts (see [Guide: Scripts](../guides/scripts.md)) the .homework.json "config"
keys are overwritten in the environment if there is a config param of
`<name>[@<version>]:<key>`.  For example, if the .homework.json has
this:

    { "name" : "foo"
    , "config" : { "port" : "8080" }
    , "scripts" : { "start" : "node server.js" } }

and the server.js is this:

    http.createServer(...).listen(process.env.homework_package_config_port)

then the user could change the behavior by doing:

    homework config set foo:port 80

See [File: homework.json](../files/homework.json.md) for more information.

## Config Settings

### browser

* Default: OS X: `"open"`
* Type: String

The browser that is called by the `homework browse` command to open websites.

### editor

* Default: `EDITOR` environment variable if set, or `"vi"` on Posix
* Type: path

The command to run for `homework edit` or `homework config edit`.

### message

* Default: "%s"
* Type: String

Commit message which is used by `homework version` when creating version commit.

Any "%s" in the message will be replaced with the version number.

### tmp

* Default: TMPDIR environment variable, or "/tmp"
* Type: path

Where to store temporary files and folders.  All temp files are deleted
on success, but left behind on failure for forensic purposes.

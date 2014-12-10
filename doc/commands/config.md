config -- Manage the homework configuration files
=================================================

## SYNOPSIS

    homework config set <key> <value> [--global]
    homework config get <key>
    homework config delete <key>
    homework config list
    homework config edit

## DESCRIPTION

homework gets its config settings from the command line, environment
variables, `homeworkrc` files, and in some cases, the `homework.json` file.

See [Files: homeworkrc](../files/homeworkrc.md) for more information about the homeworkrc files.

See [Guide: Config](../guides/config.md) for a more thorough discussion of the mechanisms
involved.

The `homework config` command can be used to update and edit the contents
of the user homeworkrc file.

## Sub-commands

Config supports the following sub-commands:

### set

    homework config set key value

Sets the config key to the value.

If value is omitted, then it sets it to "true".

### get

    homework config get key

Echo the config value to stdout.

### list

    homework config list

Show all the config settings.

### delete

    homework config delete key

Deletes the key from all configuration files.

### edit

    homework config edit

Opens the config file in an editor.

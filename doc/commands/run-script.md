run-script -- Run arbitrary assignment scripts
==============================================

## SYNOPSIS

    homework run-script [command] [-- <args>]
    homework run [command] [-- <args>]

## DESCRIPTION

This runs an arbitrary command from an assignment's `"scripts"` object.
If no assignment name is provided, it will search for a `.homework.json`
in the current folder and use its `"scripts"` object. If no `"command"`
is provided, it will list the available top level scripts.

It is used by the test, start, restart, and stop commands, but can be
called directly, as well.

You can use custom arguments when executing scripts. The special option `--` is used by
[getopt](http://goo.gl/KxMmtG) to delimit the end of the options. npm will pass
all the arguments after the `--` directly to your script:

    homework run test -- --grep="pattern"

The arguments will only be passed to the script specified after ```npm run```
and not to any pre or post script.

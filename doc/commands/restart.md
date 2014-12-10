restart -- Restart an assignment
=================================

## SYNOPSIS

    homework restart [-- <args>]

## DESCRIPTION

This runs a package's "restart" script, if one was provided.  Otherwise it runs
package's "stop" script, if one was provided, and then the "start" script.

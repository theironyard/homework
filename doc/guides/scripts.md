Guide: Scripts
==============

## DESCRIPTION

homework supports the "scripts" property of the .homework.json file, for the
following scripts:

* prepublish:
  Run BEFORE the assignment is published.
* publish, postpublish:
  Run AFTER the assignment is published.
* prefetch:
  Run BEFORE the assignment is fetched.
* fetch, postfetch:
  Run AFTER the assignment is fetched..
* preupdate:
  Run BEFORE the assignment is updated with the update command.
* update, postupdate:
  Run AFTER the assignment is updated with the update command.
* pretest, test, posttest:
  Run by the `homework test` command.
* prestop, stop, poststop:
  Run by the `homework stop` command.
* prestart, start, poststart:
  Run by the `homework start` command.
* prerestart, restart, postrestart:
  Run by the `homework restart` command. Note: `homework restart` will run the
  stop and start scripts if no `restart` script is provided.

Additionally, arbitrary scripts can be executed by running `homework
run-script <pkg> <stage>`. *Pre* and *post* commands with matching
names will be run for those as well (e.g. `premyscript`, `myscript`,
`postmyscript`).

homework also supports the "validators" and "optionalValidators" properties
of the .homework.json file.

## ENVIRONMENT

Assignment scripts run in an environment where many pieces of information
are made available regarding the setup of homework and the current state of
the process.

### .homework.json vars

The .homework.json fields are tacked onto the `homework_assignment_` prefix. So,
for instance, if you had `{"name":"foo", "version":"1.2.5"}` in your
.homework.json file, then your assignment scripts would have the
`homework_assignment_name` environment variable set to "foo", and the
`homework_assignment_version` set to "1.2.5"

### configuration

Configuration parameters are put in the environment with the
`homework_config_` prefix. For instance, you can use the `editor`
config by using the `homework_config_editor` environment variable.

### Special: .homework.json "config" object

The .homework.json "config" keys are overwritten in the environment if
there is a config param of `<name>[@<version>]:<key>`.  For example,
if the package.json has this:

    { "name" : "foo"
    , "config" : { "port" : "8080" }
    , "scripts" : { "start" : "node server.js" } }

and the server.js is this:

    http.createServer(...).listen(process.env.homework_assignment_config_port)

then the user could change the behavior by doing:

    homework config set foo:port 80

### current lifecycle event

Lastly, the `homework_lifecycle_event` environment variable is set to
whichever stage of the cycle is being executed. So, you could have a
single script used for different parts of the process which switches
based on what's currently happening.

Objects are flattened following this format, so if you had
`{"scripts":{"publish":"foo.js"}}` in your .homework.json, then you'd
see this in the script:

    process.env.homework_assignment_scripts_install === "foo.js"

## EXAMPLES

For example, if your .homework.json contains this:

    { "scripts" :
      { "install" : "scripts/install.js"
      , "postinstall" : "scripts/install.js"
      , "uninstall" : "scripts/uninstall.js"
      }
    }

then the `scripts/install.js` will be called for the install,
post-install, stages of the lifecycle, and the `scripts/uninstall.js`
would be called when the package is uninstalled.  Since
`scripts/install.js` is running for three different phases, it would
be wise in this case to look at the `npm_lifecycle_event` environment
variable.

If you want to run a make command, you can do so.  This works just
fine:

    { "scripts" :
      { "preinstall" : "./configure"
      , "install" : "make && make install"
      , "test" : "make test"
      }
    }

## EXITING

Scripts are run by passing the line as a script argument to `sh`.

If the script exits with a code other than 0, then this will abort the
process.

Note that these script files don't have to be nodejs or even
javascript programs. They just have to be some kind of executable
file.

## HOOK SCRIPTS

If you want to run a specific script at a specific lifecycle event for
ALL packages, then you can use a hook script.

Place an executable file at `node_modules/.hooks/{eventname}`, and
it'll get run for all packages when they are going through that point
in the package lifecycle for any packages installed in that root.

Hook scripts are run exactly the same way as package.json scripts.
That is, they are in a separate child process, with the env described
above.

## BEST PRACTICES

* Don't exit with a non-zero error code unless you *really* mean it.
  Except for uninstall scripts, this will cause the npm action to
  fail, and potentially be rolled back.  If the failure is minor or
  only will prevent some optional features, then it's better to just
  print a warning and exit successfully.

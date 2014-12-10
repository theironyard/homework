# .homework.json (WIP)
## DESCRIPTION
This document is all you need to know about what's required in your .homework.json file. It must be actual JSON, not just a JavaScript object literal.

A lot of the behavior described in this document is affected by the config settings described in [Guide: Config](../guides/homework-config.md).

Each homework project must have a file named `.homework.json` in the root of the project directory. This will generally be automatically generated for you by `homework init`, but you will likely need to the file to add additional functionality to each assignment. The following properties are permitted:

## name

The most important things in your .homework.json are the name and version fields. Those are actually required, and your assignment won't work without them. The name and version together form an identifier that is assumed to be completely unique. Changes to the assignment should come along with changes to the version.

The name is what your assignment is called. It ends up being part of a URL, an argument on the command line, and a folder name. Any name with non-url-safe characters will be rejected. Also, it can't start with a dot or an underscore.

## version

The most important things in your .homework.json are the name and version fields. Those are actually required, and your assignment won't work without them. The name and version together form an identifier that is assumed to be completely unique. Changes to the assignment should come along with changes to the version.

Version must be parseable by [node-semver](https://github.com/isaacs/node-semver). (`npm install semver` to use it yourself.)

More on version numbers and ranges at [semver(7)](https://www.npmjs.org/doc/misc/semver.html).

## title

The title is the long version of your `name` that will represent the assignment in the web interface. It is not restricted to url-safe characters.

## description
It's a string. This will appear in the web interface as well as be searchable.

## keywords
It's an array of strings. These keywords are the "topics" of the assignment and are used to autopopulate certain things in the web interface (teaching journals, course timelines, etc.)

## scripts

The "scripts" property is a dictionary containing script commands that are run
at various times in the lifecycle of your assignment.  The key is the lifecycle
event, and the value is the command to run at that point.

See [Guide: Scripts](../guides/scripts.md) to find out more about writing assignment scripts.

## validators

The "validators" property is an array containing commands that are run
at various times in the lifecycle of your assignment. If any command exits with
a non-zero code, the validators stop executing and the assignment will not be
allowed to be turned in.

See [Guide: Validators](../guides/validators.md) to find out more about writing assignment validators.

## optionalValidators

The "optionalValidators" property is an array containing commands that are run
at various times in the lifecycle of your assignment. If any command exits with
a non-zero code, the validators continue executing and the student will be
warned that they have possible errors.

See [Guide: Validators](../guides/validators.md) to find out more about writing assignment validators.

## config

A "config" object can be used to set configuration parameters used in assignment
scripts that persist across upgrades.  For instance, if an assignment had the
following:

    { "name" : "foo"
    , "config" : { "port" : "8080" } }

and then had a "start" command that then referenced the
`homework_assignment_config_port` environment variable, then the user could
override that by doing `homework config set foo:port 8001`.

See [Guide: Config](../guides/config.md) and [Guide: Scripts](../guides/scripts.md) for more on assignment
configs.

## publishConfig

This is a set of config values that will be used at publish-time.  It's
especially handy if you want to set the tag or registry, so that you can
ensure that a given assignment is not tagged with "latest" or published to
the global public registry by default.

Any config values can be overridden, but of course only "tag" and
"registry" probably matter for the purposes of publishing.

See [Guide: Config](../guides/config.md) to see the list of config options that can be
overridden.

## DEFAULT VALUES

homework will default some values based on assignment contents.

- `npm install` if `package.json` exists in the root of your assignment
- `bower install` if `.bowerrc` or `bower.json` exists in the root of your assignment
- `bundle install` if `Gemfile` exists in the root of your assignment

For example, if there is a `package.json` and a `.bowerrc` in the root:

```json
{
  "scripts": {
    "postinstall": "npm install && bower install"
  }
}
```

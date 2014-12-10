# homework (WIP)

This project is using [README Driven Development](http://tom.preston-werner.com/2010/08/23/readme-driven-development.html) to document the requirements of the application. Any section marked (WIP) is unfinished and most likely doesn't work. The entire project is marked (WIP) above to indicate that the documentation doesn't match the actual functionality. The (WIP) above will be removed when they match, and a 1.0.0 version will be released.

# Documentation
## Commands
### General
- [config](doc/commands/config.md)

### Student
- [fetch](doc/commands/fetch.md)

### Instructor
- [edit](doc/commands/edit.md)
- [init](doc/commands/init.md)
- [publish](doc/commands/publish.md)

### Internal
- [restart](doc/commands/restart.md)
- [run-script](doc/commands/run-script.md)
- [start](doc/commands/start.md)
- [stop](doc/commands/stop.md)
- [tag](doc/commands/tag.md)
- [test](doc/commands/test.md)

## Files
- [homework.json](doc/files/homework.json.md)
- [.homeworkrc](doc/files/homeworkrc)

## Guides
- [Config](doc/guides/config.md)
- [The Anatomy of an Assignment](doc/guides/assignment.md)

# Installation

### Basic GitHub Checkout

This will get you going with the latest version of `homework` and make it
easy to fork and contribute any changes back upstream.

1. Check out `homework`

    ~~~ sh
    $ git clone https://github.com/jacobthemyth/homework.git /path/to/homework
    ~~~

2. Add `/path/to/homework/bin` to your `$PATH` for access to the `homework`
   command-line utility.

    ~~~ sh
    $ echo 'export PATH="/path/to/homework/bin:$PATH"' >> ~/.bash_profile
    ~~~

    **Ubuntu Desktop note**: Modify your `~/.bashrc` instead of `~/.bash_profile`.

    **Zsh note**: Modify your `~/.zshrc` file instead of `~/.bash_profile`.

3. Add `homework init` to your shell to enable autocompletion.

    ~~~ sh
    $ echo 'eval "$(homework init -)"' >> ~/.bash_profile
    ~~~

    _Same as in previous step, use `~/.bashrc` on Ubuntu, or `~/.zshrc` for Zsh._

4. Restart your shell so that PATH changes take effect. (Opening a new
   terminal tab will usually do it.) Now check if homework was set up:

    ~~~ sh
    $ type homework
    #=> "homework is a function"
    ~~~

#### Upgrading

If you've installed homework manually using git, you can upgrade your
installation to the cutting-edge version at any time.

~~~ sh
$ cd /path/to/homework
$ git pull
~~~

To use a specific release of homework, check out the corresponding tag:

~~~ sh
$ cd /path/to/homework
$ git fetch
$ git checkout v0.3.0
~~~

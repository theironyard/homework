# Installation

The primary way to install `homework` is using npm:

```sh
$ npm install -g jacobthemyth/homework
```

## Basic GitHub Checkout

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

3. Restart your shell so that PATH changes take effect. (Opening a new
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


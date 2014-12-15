Assignment Registry API
==================================================

# Assignments
## `GET /assignments`

```json
{
  "foo": {
    "name" : "foo",
    "versions": {
      "1.0.0": {
        "name": "foo",
        "title": "Foo",
        "repository": {
          "url": "git://github.com/example/assignments.git#1234",
          "path": "/js/foo"
        },
        "version": "1.0.0",
        "description": "I'm foo",
        "keywords": [
          "JavaScript",
          "jQuery"
        ],
        "created_at": "2014-12-11T19:25:01.542Z",
        "dist": {
          "tarball" : "http://example.com/-/foo-1.0.0.tgz"
        }
      }
    },
    "tags": {
      "latest": "1.0.0"
    }
  },
  "bar": {
    "name" : "bar",
    "versions": {
      "1.0.0": {
        "name": "bar",
        "repository": {
          "url": "git://github.com/example/assignments.git#1234",
          "path": "/js/bar"
        },
        "version": "1.0.0",
        "description": "I'm bar",
        "created_at": "2014-12-11T19:25:01.542Z",
        "dist": {
          "tarball" : "http://example.com/-/bar-1.0.0.tgz"
        }
      }
    }
  },
  "baz": {
    "name" : "baz",
    "versions": {
      "1.0.0": {
        "name": "baz",
        "repository": {
          "url": "git://github.com/example/assignments.git#1234",
          "path": "/js/baz"
        },
        "version": "1.0.0",
        "description": "I'm baz",
        "created_at": "2014-12-11T19:25:01.542Z",
        "dist": {
          "tarball" : "http://example.com/-/baz-1.0.0.tgz"
        }
      }
    }
  }
}
```

## `GET /assignments/foo`

```json
{
  "name" : "foo",
  "versions": {
    "1.0.0": {
      "name": "foo",
      "repository": {
        "url": "git://github.com/example/assignments.git#1234",
        "path": "/js/foo"
      },
      "version": "1.0.0",
      "description": "I'm foo",
      "created_at": "2014-12-11T19:25:01.542Z",
      "dist": {
        "tarball" : "http://example.com/-/foo-1.0.0.tgz"
      }
    }
  }
}
```

## `GET /assignments/foo/1.0.0

```json
{
  "name" : "foo",
  "repository": {
    "url": "git://github.com/example/assignments.git#1234",
    "path": "/js/foo"
  },
  "version": "1.0.0",
  "description": "I'm foo",
  "created_at": "2014-12-11T19:25:01.542Z",
  "dist": {
    "tarball" : "http://example.com/-/foo-1.0.0.tgz"
  }
}
```

## `POST /assignments/foo/1.0.0
- If already exists, it should fail. 409?

```json
{
  "name" : "foo",
  "repository": {
    "url": "git://github.com/example/assignments.git#1234",
    "path": "/js/foo"
  },
  "version": "1.0.0",
  "description": "I'm foo",
  "dist": {
    "tarball" : "http://example.com/-/foo-1.0.0.tgz"
  }
}
```

# Classes

# TODO
- user CRUD
- class CRUD
  - due date

# Travis Multi Language Example

[![Build Status](https://travis-ci.org/lextoumbourou/travis-multi-language-example.svg?branch=master)](https://travis-ci.org/lextoumbourou/travis-multi-language-example)
[![Coverage Status](https://coveralls.io/repos/lextoumbourou/travis-multi-language-example/badge.png?branch=master)](https://coveralls.io/r/lextoumbourou/travis-multi-language-example?branch=master)

An example of using multiple languages (Python & JavaScript) with Travis & Coveralls 

## Overview

The test was developed after reading these and other discussions:

* https://groups.google.com/forum/#!topic/travis-ci/3pzCgvxWZAo
* http://stackoverflow.com/questions/18456611/is-it-possible-to-set-up-travis-to-run-tests-for-several-languages
* https://groups.google.com/forum/#!topic/travis-ci/l8DIsdRt5P4

## Learnings

* Travis can be configured to test multiple languages.
* Travis will only support one "main" language, which can use features like [multiple build environments](http://docs.travis-ci.com/user/languages/python/). The other language will just simply run the test runner. *Note: if you do use multiple build environments, the secondary language's test runner will get run once for each "main" language environment. Eg: karma will run once for the Python 2.7 tests and again for the Python 3.2 tests*.
* At the time of writing, Coveralls does not support coverage reports for multi languages. If you send a Python coverage report followed by a JavaScript, the JS one will "overwrite" the Python one.

### License

Not really sure if this project needs a license, but anyway it's MIT.

***

Please let me know if I've got anything wrong.

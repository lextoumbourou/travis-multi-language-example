# Travis Multi Language Example

A multi language (Python + JavaScript) example repo utilising Travis & Coveralls. 

## Overview

Based on a [couple](https://groups.google.com/forum/#!topic/travis-ci/3pzCgvxWZAo) [of](http://stackoverflow.com/questions/18456611/is-it-possible-to-set-up-travis-to-run-tests-for-several-languages) [discussions](https://groups.google.com/forum/#!topic/travis-ci/l8DIsdRt5P4).

## Learnings

* Travis can be configured to test multiple languages
* There can only be one "main" language, which gets features like [multiple build environments](http://docs.travis-ci.com/user/languages/python/) the other will just simply run the test runner. *Note: if you do use multiple build environments, the secondary language's test runner will get run once for each "main" language environment. Eg: karma will run once for the Python 2.7 tests and again for the Python 3.2 tests*
* At the time of writing, Coveralls does not support coverage reports for multi languages. If you send a Python coverage report, followed by a JavaScript, the JS one will "overwrite" the Python one.

Please let me know if I've got anything wrong.

# ogle

_original ((gateway||gangsta)) lambda executable_

an og static site generator that utilizes AWS api gateway + lambda + dynamodb


- [surfeit][surfeit] in addition to markdown is it's datastore
    + using [surfeit][surfeit] ogle can also show the site at any point in time; if the time span is _reasonably popular_ that is also cached through ogle mechanics (_dreadnought_) to provide best performance
- models are written in [argentavis](https://github.com/yyolk/argentavis)
    + the simple shit
- all logic is built through [dreadnought](https://github.com/yyolk/dreadnought) adapters
    + never write another adapter, just serve it with [surfeit][surfeit]
    + or write your own format


[surfeit]: https://github.com/yyolk/surfeit

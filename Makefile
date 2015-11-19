js:
	babel src/ --out-dir lib/

.PHONY: test
test: js
	mocha --compilers js:babel-core/register -t 10s

all: js

watch:
	coffee --watch --output lib/ src/ &
	mocha --compilers js:babel-core/register -t 10s -w -R min

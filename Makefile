js:
	babel src/ --out-dir lib/

.PHONY: test
test: js
	mocha --compilers js:babel-core/register -t 10s

all: js

watch:
	babel --watch src/ --out-dir lib/ &
	mocha --compilers js:babel-core/register -t 10s -w -R min

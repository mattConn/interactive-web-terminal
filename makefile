TRANSPILER = 'node_modules/babel-cli/bin/babel.js'
DISTCHECK = if [ ! -d dist ]; then mkdir dist; fi;

dist/main.js: src/main.es6
	$(DISTCHECK) $(TRANSPILER) $^ > $@

dist/demo.html: src/demo.html
	cp $^ $@

all: dist/main.js dist/demo.html

clean:
	rm -rf dist
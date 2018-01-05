TRANSPILER = 'node_modules/babel-cli/bin/babel.js'
DISTCHECK = if [ ! -d dist ]; then mkdir dist; fi;

dist/main.js: src/*.es6
	$(DISTCHECK) gpp -C src/main.es6 > src/_main.es6; $(TRANSPILER) src/_main.es6 > $@; rm src/_main.es6

dist/demo.html: src/demo.html
	cp $^ $@

all: dist/main.js dist/demo.html

clean:
	rm -rf dist
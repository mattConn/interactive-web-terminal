TRANSPILER = node_modules/babel-cli/bin/babel.js
DISTCHECK = if [ ! -d dist ]; then mkdir dist; fi;

dist/web-terminal.js: src/*.es6
	$(DISTCHECK) gpp -C src/main.es6 > src/_main.es6; $(TRANSPILER) src/_main.es6 > $@; rm src/_main.es6

dist/demo.html: src/demo.html
	cp $^ $@

dist/web-terminal.css: src/web-terminal.css
	cp $^ $@

all: dist/web-terminal.js dist/demo.html dist/web-terminal.css

clean:
	rm -rf dist
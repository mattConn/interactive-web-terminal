TRANSPILER = node_modules/babel-cli/bin/babel.js
CSS-PP = node_modules/node-sass/bin/node-sass

dist/index.js: src/*.es6
	$(TRANSPILER) src/index.es6 > $@

dist/index.html: src/index.html
	cp $^ $@

dist/style.css: src/style.scss
	$(CSS-PP) $^ > $@

distcheck:
	if [ ! -d dist ]; then mkdir dist; fi;

all: distcheck dist/index.js dist/index.html dist/style.css

clean:
	rm -rf dist
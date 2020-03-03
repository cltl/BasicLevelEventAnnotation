# Basic Level Event Annotation

The goal of this tool is to enable annotation for Basic Level Events.

## Install node.js

Please first install node.js. This can take quite some time as homebrew typically will first update itself
before installing other packages.
```
brew install node
```

## Install packages
```
npm install
```
This should install the packages from *package.json*.

## Downloaded items to annotate
```
bash install.sh
```

## How to use
Run 

```
node server.js test // for testing purposes, contains only two items
node server.js other // to annotate all top ten children except sport
node server.js sport // to annotate the sport subgraph
```

Point your browser towards *http://localhost:8080/*

When you've completed the annotation process, i.e., an image of **the end** is shown, please zip the **data** folder
and send it to m.c.postma@vu.nl.
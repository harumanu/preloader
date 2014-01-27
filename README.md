A simple preloader that utilizes jQuery deferreds and takes multiple callbacks.

### Usage

```
var preloader = new Preloader(
    'path/to/asset1',
    'path/to/asset2',
    'path/to/asset3'
);

preloader.done(function () {
    // All assets loaded
});
```

A simple preloader that utilizes jQuery deferreds to delay code execution until the specified external assets have been loaded. Supports multiple callbacks passed to its done method.

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

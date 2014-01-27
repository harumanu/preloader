    var Preloader = function () {
        this._init.apply(this, arguments);
    };

    Preloader.prototype = {
        _init: function () {
            this._assets = Array.prototype.slice.call(arguments);
        },
        _loadAssets: function () {
            var deferreds = [],
                self = this;

            $.each(this._assets, function (i, assetURL) {
                var img = new Image(),
                    deferred = $.Deferred();
                deferreds.push(deferred.promise());
                img.src = assetURL;
                $(img).load(function () {
                    deferred.resolve();
                });
            });

            $.when.apply($, deferreds).then(function () {
                $.each(self._callbacks, function (i, fn) {
                    fn.call();
                });
            });
        },
        done: function () {
            this._callbacks = Array.prototype.slice.call(arguments);
            this._loadAssets();
        }
    }

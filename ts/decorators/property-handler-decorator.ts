export function PropertyHandler(target, key: string): any {
    var propertuValue = target[key];

    var getter = function () {
        return propertuValue;
    };

    var setter = function (newVal) {
        propertuValue = newVal;
    };

    Object.defineProperty(target, key, {
        get: getter,
        set: setter
    });
}
export function HashDecorator(target, propertyKey: string, descriptor: PropertyDescriptor): any {
    var oldValue = descriptor.value;

    descriptor.value = function () {
        let hashValue = `hash of "${target.id}" and "${target.name}"`;
        Object.defineProperty(target, "hash", { value: hashValue, configurable: true, writable: true, enumerable: true });
        let returningValue = oldValue.apply(null, arguments);
        return returningValue;
    };

    return descriptor;
}
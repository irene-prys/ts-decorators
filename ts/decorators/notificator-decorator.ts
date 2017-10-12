export function Notificator(callbacks: (() => any)[]) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        var oldValue = descriptor.value;
        descriptor.value = function () {
            for (let i = 0; i < callbacks.length; i++) {
                callbacks[i].call(null);
            }
            let returningValue = oldValue.apply(null, arguments);
            return returningValue;
        };

        return descriptor;
    };
}

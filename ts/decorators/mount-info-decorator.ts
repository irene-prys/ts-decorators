export function MountInfo<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        componentDidMount = function (name) {
            console.log(`Component ${name} was mounted`);
        };
    }
}
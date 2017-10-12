import { HashDecorator } from './decorators/hash-decorator';
import { PropertyHandler } from './decorators/property-handler-decorator';
import { MountInfo } from './decorators/mount-info-decorator';
import { Notificator } from './decorators/notificator-decorator';

@MountInfo
class SimpleObject {
    @PropertyHandler
    name: string;
    @PropertyHandler
    id: number;

    constructor(name) {
        this.name = name;
        this.id = 0;
    }

    @HashDecorator
    greet() {
        console.log("Have a good day");
    }

    @Notificator([() => console.log("turn of the light"),
    () => console.log("lock the door")])
    bye() {
        console.log("see you late");
    }
}

let obj = new SimpleObject("Hello") as any;
obj.componentDidMount("first-component");
obj.greet();
console.log("SimpleObject's hash: " + obj.hash);
obj.bye();



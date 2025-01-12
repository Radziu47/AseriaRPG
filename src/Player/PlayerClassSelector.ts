import { TestClass } from "./PlayerClasses";

export class PlayerClassSelector{
    static Select(className: string) {
         switch(className){
            case "TestClass":
                return new TestClass();
        }
    }
}

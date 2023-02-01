import Greeter from "./module1.js"
import { Logger } from "./logger.js"
// const greeter= new Greeter();
// greeter.sayHello("Krushna")
const logger= new Logger()

logger.logInfo("This is informative message")
logger.logErr("Error message")

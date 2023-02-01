import chalk, { Chalk } from "chalk";
export class Logger{

    constructor(){
        this.chalk= new Chalk()
    }
    logInfo(msg)
    {
        console.log(this.chalk.blue(msg))
    }
    logErr(warning)
    {
        console.log(this.chalk.red(warning))
    }
}
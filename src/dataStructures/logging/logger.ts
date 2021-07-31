class Logger {

    private log: string[];
    private currentLogBlock: string[];

    constructor() {
        this.log = [] as string[];
        this.currentLogBlock = [] as string[];
    }

    newLoggerBlock(blockName: string) {
        this.currentLogBlock = [] as string[];
        this.currentLogBlock.push("----------");
        this.currentLogBlock.push(blockName);
    }

    addLogBlock(log: string) {
        this.currentLogBlock.push(log);
    }

    endLogBlock() {
        this.currentLogBlock.push("----------");
        for (let index = this.currentLogBlock.length - 1; index >= 0; index--) {
            this.log.unshift(this.currentLogBlock[index]);
        }

        this.currentLogBlock = [] as string[];
    }

    getLog() {
        return this.log;
    }

}

export default Logger;
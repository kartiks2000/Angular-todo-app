export class taskinit {
    task: String;
    id: Date;

    constructor(s:String){
        this.task = s;
        this.id = new Date();
    }
}
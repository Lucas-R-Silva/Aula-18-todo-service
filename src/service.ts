import { Database } from "./database";
import { ToDoItem, ToDoItemDAO } from "./model";

export class ToDoItemService {
    dao: ToDoItemDAO

    constructor(database: Database){
        this.dao = new ToDoItemDAO(database)
    }

    async list(): Promise<ToDoItem[]>{
        return await.this.dao.list()
    }
}
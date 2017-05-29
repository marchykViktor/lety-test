import { InMemoryDbService } from "angular2-in-memory-web-api";

export class ItemData implements InMemoryDbService {
    createDb() {
        let items = [
            { id: 1, login: 'admin', password: '123' }
        ];
        return { items };
    }
}
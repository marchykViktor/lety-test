"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ItemData = (function () {
    function ItemData() {
    }
    ItemData.prototype.createDb = function () {
        var items = [
            { id: 1, login: 'admin', password: '123' }
        ];
        return { items: items };
    };
    return ItemData;
}());
exports.ItemData = ItemData;
//# sourceMappingURL=inMemoryServer.js.map
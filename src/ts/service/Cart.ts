import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    sum(): number {
        return this._items.reduce((sum, item) => sum + item.price, 0);
    }

    sum_sale(sale: number): number {
       return (this.sum() * (1 - (sale / 100))); 
    }

    remove(id: number): void {
        const itemIndex = this._items.findIndex((item) => item.id === id);
        this._items.splice(itemIndex, 1);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }
}
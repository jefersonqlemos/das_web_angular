import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GenericRepository {
  private storageKey!: string;
  private itemKey!: string;
  private list: Array<any>;
  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
    this.list = [];
  }

  protected configure(repositoryName: string, itemKey: string) {
    this.storageKey = repositoryName;
    this.itemKey = itemKey;

    const storageValue = this.storage.getItem(this.storageKey);
    if (storageValue != undefined) {
      this.list = JSON.parse(storageValue);
    }
  }

  add(value: any) {
    this.incrementKey(value);

    this.list.push(value);

    this.save();
  }

  update(value: any) {
    var item = this.getItem(value[this.itemKey]);

    if (item == undefined)
      return false;

    // update all item properties
    for (const key in item) {
      if (Object.prototype.hasOwnProperty.call(item, key)) {
        item[key] = value[key];
      }
    }

    this.save();

    return true;
  }

  private incrementKey(value: any) {
    let id = 0;
    const lastItem = this.list[this.list.length - 1];

    if (lastItem != undefined) {
      id = lastItem[this.itemKey];
    }

    // increment the id and use it
    value[this.itemKey] = ++id;
  }

  getItem(key: any): any {
    return this.list.find((i) => i[this.itemKey] == key);
  }

  getArrayItem(key: any): any {
    return this.list.filter((i) => i[this.itemKey] == key);
  }

  getAll() {
    return this.list;
  }

  remove(key: any): boolean {
    const item = this.getItem(key);

    if (item == undefined) {
      return true;
    }

    const idx = this.list.indexOf(item);
    this.list.splice(idx, 1);

    this.save();

    return true;
  }

  clear(): boolean {
    this.list = [];

    this.save();

    return true;
  }

  private save() {
    this.storage?.setItem(this.storageKey, JSON.stringify(this.list));
  }
}

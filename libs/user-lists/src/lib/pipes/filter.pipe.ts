import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'Filter',
})
@Injectable()
export class FilterPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {any[]} items
   * @param {string} searchText
   * @param {string} property
   * @returns {any}
   */
  transform(items: any[], property: string, searchText: string): any[] {
    if (!items) return [];
    if (!searchText || searchText.length == 0) return items;
    return items.filter(
      (obj) =>
        obj[property]?.toLowerCase().indexOf(searchText.toLowerCase()) != -1
    );
  }
}

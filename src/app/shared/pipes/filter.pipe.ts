import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search',
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], filter: number) {
        
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        let filteredItems = items.filter(item => item.h_in.indexOf(filter) !== -1);

        if(filteredItems.length == 0) {
            return [{message: "No matches found"}];
        }
        return filteredItems;
    }
}
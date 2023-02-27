import { Pipe, PipeTransform } from '@angular/core';
import { PhotoInterface } from 'src/app/interface/photo';

@Pipe({
  name: 'filterByDescription'
})
export class FilterByDescriptionPipe implements PipeTransform {

  transform(photos: PhotoInterface[], descriptionQuery: string) {
    descriptionQuery = descriptionQuery
        .trim()
        .toLowerCase();

    if(descriptionQuery) {
        return photos.filter(photo =>
            photo.description.toLowerCase().includes(descriptionQuery)
        );
    } else {
        return photos;
    }
}

}

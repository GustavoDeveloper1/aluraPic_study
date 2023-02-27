import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { PhotoInterface } from 'src/app/interface/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit, OnChanges {

  @Input() photos: PhotoInterface[] = []

  rows: any[] = [];


  constructor() { }

  ngOnInit(): void {
    this.rows = this.groupColumns(this.photos);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['photos'])
      this.rows = this.groupColumns(this.photos);

    console.log(this.rows)
  }

  groupColumns(photos: any) {
    const newRows: any = [];

    for (let i = 0; i < photos?.length; i += 3) {
      newRows.push(photos.slice(i, i + 3))
    }

    return newRows
  }
}

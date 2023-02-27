import { Component, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { PhotoInterface } from 'src/app/interface/photo';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent {
  photos: PhotoInterface[] = [];
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();
  @Output() hasMore: boolean = false
  constructor(private photoService: PhotoService, private activateRoute: ActivatedRoute) {

  }
  ngOnInit(): void {

    const userName = this.activateRoute.snapshot.params['userName'];

    this.photoService.listFromUser(userName).subscribe({
      next: (photos) => {
        this.photos = photos;
        console.log(photos)
      }
    })
  }


  filterDatas(event: any) {
    this.filter = event.target.value

    this.debounce.next(this.filter)
  }

}

import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-singlepage-header',
  templateUrl: './singlepage-header.component.html',
  styleUrls: ['./singlepage-header.component.css']
})
export class SinglepageHeaderComponent {

  @Input() tripName: string;
  @Input() rtLink: string;

  goToLink() {
    window.open(this.rtLink, "_blank");
  }
}

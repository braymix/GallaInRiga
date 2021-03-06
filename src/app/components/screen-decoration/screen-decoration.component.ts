import { Component, OnInit } from '@angular/core';
import { FilledTile } from '@trungk18/interface/tile/filled-tile';

@Component({
  selector: 't-screen-decoration',
  templateUrl: './screen-decoration.component.html',
  styleUrls: ['./screen-decoration.component.scss']
})
export class ScreenDecorationComponent implements OnInit {
  title = 'METTI IN FILA I GALLAGHER';
  filled = new FilledTile();
  constructor() {}

  ngOnInit(): void {}
}

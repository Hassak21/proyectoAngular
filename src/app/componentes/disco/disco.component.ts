import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Disco } from '../../../models/disco.models';

@Component({
  selector: 'app-disco',
  templateUrl: './disco.component.html',
  styleUrls: ['./disco.component.css']
})
export class DiscoComponent implements OnInit {

  @Input() disco!: Disco;

  @HostBinding('attr.class') cssClass = 'col-md-4'; 

  constructor() { }

  ngOnInit(): void {
  }

}

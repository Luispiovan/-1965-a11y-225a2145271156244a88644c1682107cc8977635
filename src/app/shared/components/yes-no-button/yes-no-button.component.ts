import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-yes-no-button',
  templateUrl: './yes-no-button.component.html',
  styleUrls: ['./yes-no-button.component.scss'],
})
export class YesNoButtonComponent implements OnInit {
  @Input() public value: string = null;
  @Input() public label = ''

  constructor() {}

  ngOnInit(): void {}
}

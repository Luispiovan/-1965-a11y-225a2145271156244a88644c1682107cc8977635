import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-yes-no-button',
  templateUrl: './yes-no-button.component.html',
  styleUrls: ['./yes-no-button.component.scss'],
})
export class YesNoButtonComponent implements OnInit {
  @Input() public value: string = null;
  @Input() public label = '';
  @Output() public valueChange = new EventEmitter<string>();

  public option = YesNoButtonOptions;

  constructor() {}

  ngOnInit(): void {}

  activate(value: string): void {
    this.value = value;
    this.valueChange.emit(this.value);
  }
}

enum YesNoButtonOptions {
  YES = 'yes',
  NO = 'no',
}

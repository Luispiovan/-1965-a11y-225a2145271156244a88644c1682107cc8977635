import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-yes-no-button',
  templateUrl: './yes-no-button.component.html',
  styleUrls: ['./yes-no-button.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => YesNoButtonComponent),
    },
  ],
})
export class YesNoButtonComponent implements OnInit, ControlValueAccessor {
  @Input() public value: string = null;
  @Input() public label = '';
  @Output() public valueChange = new EventEmitter<string>();

  public option = YesNoButtonOptions;
  public onChange = (value: string) => {};
  public onTouched = () => {};

  constructor() {}

  ngOnInit(): void {}

  public writeValue(value: string): void {
    this.value = value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  activate(value: string): void {
    this.writeValue(value);
  }
}

enum YesNoButtonOptions {
  YES = 'yes',
  NO = 'no',
}

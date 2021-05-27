import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { UniqueIdService } from '../../services/unique-id/unique-id.service';

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
  @Input() disabled = false;
  @Input() public value: string = null;
  @Input() public label = '';
  @Output() public valueChange = new EventEmitter<string>();

  public id: string = null;
  public option = YesNoButtonOptions;
  public onChange = (value: string) => {};
  public onTouched = () => {};

  constructor(private uniqueService: UniqueIdService) {
    this.id = this.uniqueService.generateUniqueIdWithPrefix('yes-no-button-');
  }

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
    this.disabled = isDisabled;
  }

  activate(value: string): void {
    this.writeValue(value);
  }
}

enum YesNoButtonOptions {
  YES = 'yes',
  NO = 'no',
}

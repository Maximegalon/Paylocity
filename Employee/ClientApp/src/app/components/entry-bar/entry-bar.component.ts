import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-entry-bar',
  templateUrl: './entry-bar.component.html'
})
export class EntryBarComponent implements OnInit {
  @Input() buttonLabel;
  @Input() textPlaceholder;
  @Output() selected = new EventEmitter<string>();

  formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      dependantName: new FormControl('', [Validators.required, Validators.maxLength(200)])
    });
  }

  /**
  * Handles when a selection is entered in the text field
  *
  * @returns void
  */
  selectionMade(): void {
    this.selected.emit(this.formGroup.value.dependantName);

    this.formGroup.patchValue({
      dependantName: ''
    });
    this.formGroup.markAsPristine();
    this.formGroup.markAsUntouched();
  }
}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { asyncScheduler, of, scheduled } from 'rxjs';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, DropDownListModule, ReactiveFormsModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent {
  @Input() control!: FormControl;

  data = toSignal(
    scheduled(
      of([
        { id: 1, name: 'Option #1' },
        { id: 2, name: 'Option #2' },
      ]),
      asyncScheduler
    )
  );
}

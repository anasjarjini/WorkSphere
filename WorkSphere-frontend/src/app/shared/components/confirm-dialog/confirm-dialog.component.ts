import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './confirm-dialog.component.html'
})
export class ConfirmDialogComponent {
  readonly title = input.required<string>();
  readonly message = input.required<string>();
  readonly confirmText = input<string>('Confirmer');
  readonly cancelText = input<string>('Annuler');
  readonly confirmClass = input<string>('bg-primary text-text-inverse hover:bg-primary-hover');
  readonly showNoteField = input(false);
  readonly notePlaceholder = input('');

  readonly confirmed = output<void>();
  readonly cancelled = output<void>();
  readonly note = output<string>();

  readonly noteValue = signal('');

  onConfirm(): void {
    if (this.showNoteField()) {
      this.note.emit(this.noteValue());
    }
    this.confirmed.emit();
  }

  onCancel(): void {
    this.cancelled.emit();
  }
}

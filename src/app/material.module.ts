import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [MatInputModule, MatFormFieldModule, MatCardModule, MatIconModule, MatButtonModule],
  exports: [MatInputModule, MatFormFieldModule, MatCardModule, MatIconModule, MatButtonModule]
})
export class MaterialModule {}

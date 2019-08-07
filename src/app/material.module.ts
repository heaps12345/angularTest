import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [MatInputModule, MatFormFieldModule, MatCardModule, MatIconModule, MatButtonModule, MatSidenavModule],
  exports: [MatInputModule, MatFormFieldModule, MatCardModule, MatIconModule, MatButtonModule, MatSidenavModule]
})
export class MaterialModule {}

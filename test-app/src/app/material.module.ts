import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [ MatButtonModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatCardModule ],
    exports: [ MatButtonModule, MatInputModule, MatFormFieldModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatCardModule ]
})

export class MaterialModule {

}
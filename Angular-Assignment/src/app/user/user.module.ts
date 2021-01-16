import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UserComponent } from "./user.component";
import { HighlighterDirective } from './highlighter.directive';

@NgModule({
    declarations: [
        UserComponent,
        HighlighterDirective
    ],
    imports: [CommonModule],
    exports: [UserComponent],
  })
  export class UserModule {}
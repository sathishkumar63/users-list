import { UserListsModule } from '@users-list/user-lists';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UserListsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

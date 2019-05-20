import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostFormComponent } from './postForm/postForm.component';

import { FormsModule } from '@angular/forms';
import { TRIALComponent } from './trial/trial.component';
import { PushArrayTodayLolComponent } from './push-array-today-lol/push-array-today-lol.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostFormComponent,
    TRIALComponent,
    PushArrayTodayLolComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

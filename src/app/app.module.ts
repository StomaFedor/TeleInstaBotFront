import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatCarouselModule } from 'ng-mat-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostService } from './service/http-services/post.service';
import { ResourceService } from './service/resource.service';
import { ButtonsHandlersComponent } from './buttons-handlers/buttons-handlers.component';
import { MaterialModule } from './material/material.module';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ButtonsHandlersComponent,
    AdminPanelComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    MatCarouselModule.forRoot(),
  ],
  providers: [
    ResourceService,
    PostService,
  ],
  exports: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }

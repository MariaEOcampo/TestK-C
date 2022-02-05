import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './material/material.module';
import { BodycontainerComponent } from './containers/bodycontainer/bodycontainer.component';
import { TabComponent } from './components/tab/tab.component';
import { ExpansionContainerComponent } from './containers/expansion-container/expansion-container.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { ShareBtnComponent } from './components/share-btn/share-btn.component';
import { StatusComponent } from './components/status/status.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BodycontainerComponent,
    TabComponent,
    ExpansionContainerComponent,
    UserTableComponent,
    ShareBtnComponent,
    StatusComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, 
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

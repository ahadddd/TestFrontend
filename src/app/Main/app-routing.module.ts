import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { DetailsComponent } from './Members/details/details.component';
import { ListComponent } from './Members/list/list.component';
import { ListsComponent } from './Lists/Lists.component';
import { MessagesComponent } from './Messages/Messages.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'members', component: ListComponent },
  { path: 'members/:id', component: DetailsComponent },
  { path: 'lists', component: ListsComponent },
  { path: 'messages', component: MessagesComponent },
  { path: '**', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

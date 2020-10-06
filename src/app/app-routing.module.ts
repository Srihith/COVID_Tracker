import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalComponent } from './global/global.component';
import { MeComponent } from './me/me.component';
import { FriendsComponent } from './friends/friends.component';

const routes: Routes = [
  {path: 'app-me', component: MeComponent},
  {path: 'app-friends', component: FriendsComponent},
  {path: 'app-global', component: GlobalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

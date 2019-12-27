import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPagLayoutComponent } from './core/site-layout/menu-pag-layout/menu-pag-layout.component';
import { PostsHomePageComponent } from './posts/pages/posts-home-page/posts-home-page.component';
import { PostAddFormComponent } from './posts/components/post-add-form/post-add-form.component';



const routes: Routes = [{
  path: '',
  component: MenuPagLayoutComponent,
  children: [
    { path: '', component: PostsHomePageComponent },
    { path: 'add', component: PostAddFormComponent },
  ]
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

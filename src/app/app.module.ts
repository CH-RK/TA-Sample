import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { SampleComponent } from './sample/sample.component';
import { SubuserComponent } from './user/subuser/subuser.component';
import { SubadminComponent } from './admin/subadmin/subadmin.component';

const routes: Routes=[{
    path:"user",
    component: UserComponent,
    children:[{
      path:"subuser",
      component:SubuserComponent
    }]
},
{
  path:"admin",
  component:AdminComponent,
  children:[{
    path:"subadmin",
    component:SubadminComponent
  }]
},
{
  path:"sample",
  component:SampleComponent
}
]
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    SampleComponent,
    SubuserComponent,
    SubadminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

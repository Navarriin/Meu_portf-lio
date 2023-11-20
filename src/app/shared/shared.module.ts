import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Meus Components
import { AboutMeComponent } from './about-me/about-me.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AboutMeComponent,
    HeaderComponent,
    HomeComponent,
    ProjectsComponent,
    SkillsComponent,
  ],
  exports: [
    CommonModule,
    AboutMeComponent,
    HeaderComponent,
    HomeComponent,
    ProjectsComponent,
    SkillsComponent,
  ],
})
export class SharedModule {}

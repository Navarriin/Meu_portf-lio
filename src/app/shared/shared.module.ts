import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Meus Components
import { AboutMeComponent } from './about-me/about-me.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { InitialPageComponent } from './initial-page/initial-page.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AboutMeComponent,
    HeaderComponent,
    InitialPageComponent,
    ProjectsComponent,
    SkillsComponent,
  ],
  exports: [
    CommonModule,
    AboutMeComponent,
    HeaderComponent,
    InitialPageComponent,
    ProjectsComponent,
    SkillsComponent,
  ],
})
export class SharedModule {}

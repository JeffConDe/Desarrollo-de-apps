import { Routes } from '@angular/router';

import { JobList } from './components/job-list/job-list';
import { JobDetail } from './components/job-detail/job-detail';
import { AppliedJobs } from './components/applied-jobs/applied-jobs';

export const routes: Routes = [

  { path:'', component: JobList },

  { path:'job/:id', component: JobDetail },

  { path:'applied', component: AppliedJobs }

];
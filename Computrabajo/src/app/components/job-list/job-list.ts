import { Component } from '@angular/core';
import { JobService } from '../../services/job.service';
import { RouterModule } from '@angular/router';   
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-job-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './job-list.html',
  styleUrl: './job-list.css',
})
export class JobList {

jobs:any[] = []

constructor(private jobService:JobService){}

ngOnInit(){

this.jobs = this.jobService.getJobs()

}

deleteJob(id:number){

  this.jobService.deleteJob(id)

  this.jobs = this.jobService.getJobs()

}

}

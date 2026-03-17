import { Component } from '@angular/core';  
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../../services/job.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-detail',
  imports: [CommonModule],
  templateUrl: './job-detail.html',
  styleUrl: './job-detail.css',
})
export class JobDetail {

  job:any

constructor(
 private route:ActivatedRoute,
 private jobService:JobService
){}

ngOnInit(){

const id = Number(this.route.snapshot.paramMap.get('id'))

this.job = this.jobService.getJobById(id)

}

}

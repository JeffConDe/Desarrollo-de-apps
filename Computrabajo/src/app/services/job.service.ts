import { Injectable } from '@angular/core';
import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  jobs:Job[] = [

    {
      id:1,
      title:"Frontend Developer",
      company:"Tech Corp",
      location:"Remote",
      salary:"$3000",
      description:"Desarrollar interfaces en Angular"
    },

    {
      id:2,
      title:"Backend Developer",
      company:"Data Systems",
      location:"Bogotá",
      salary:"$3500",
      description:"Crear APIs con Node"
    }

  ]

  getJobs():Job[]{
    return this.jobs;
  }

  getJobById(id:number){
    return this.jobs.find(job => job.id === id);
  }

  deleteJob(id:number){

  this.jobs = this.jobs.filter(job => job.id !== id)

}
}
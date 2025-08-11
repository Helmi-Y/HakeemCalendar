import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Appointment {
  date: number; // day of the month (1-31)
  title: string;
  time?: string; // optional time
  description?: string;
  location?: string;
}

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.html',
  styleUrl: './calendar.css'
})

export class Calendar implements OnInit{
  month: string = 'August';
  year: number = new Date().getFullYear();
  daysInMonth: number = 31;  // August always has 31 days

  appointments: Appointment[] = [
    { 
      date: 12, 
      title: 'Outpatient Eval', 
      time: '9:15 AM',
      description: '',
      location: 'St. Anthony\'s hospital. Med Plaza 3 Suite 300'
    },
    { 
      date: 12, 
      title: 'Trauma Surgery', 
      time: '13:30 AM',
      description: '',
      location: 'St. Anthony\'s hospital. Med Plaza 1 Suite 360'
    },
    { 
      date: 12, 
      title: 'Before or After Trauma Appointment', 
      time: 'Check X-ray for Neuro',
      description: 'Check out the X-ray and ask if it is better to do it more close to the appointment.',
      location: 'Panorma Orthopedics & Spine Center - Golden'
    },
    { 
      date: 12, 
      title: '', 
      time: 'Tante Nana arrives',
      description: '',
      location: 'Denver International Airport'
    },
    { 
      date: 14, 
      title: '', 
      time: 'Helmi goes back to Arkansas',
      description: '',
      location: 'Denver International Airport'
    },
    { 
      date: 15, 
      title: '', 
      time: 'Audry Discharge Date!',
      description: '',
      location: 'St. Anthony\'s hospital. Room 300'
    },
    { 
      date: 20, 
      title: 'Ortho(Hand) Surgery', 
      time: '12:40 PM',
      description: '',
      location: 'St. Anthony\'s hospital. Med Plaza 1 Suite 360'
    },
    { 
      date: 25, 
      title: 'Neuro Surgery', 
      time: '11:00 AM',
      description: 'Dino Cairo (Neurologist) will meet right after the apointment so ask about it. Dr. Tara Kane (Neuropsychologist) will be scheduled soon. Assistant: Kim - 720-321-8062',
      location: 'St. Anthony\'s hospital. Med Plaza 1 Suite 255'
    }
  ];
  
  days: number[] = [];

  ngOnInit(): void {
    // Fill days array [1..31]
    this.days = Array.from({ length: this.daysInMonth }, (_, i) => i + 1);
  }

  getAppointmentsForDay(day: number): Appointment[] {
    return this.appointments.filter(app => app.date === day);
  }
  
}

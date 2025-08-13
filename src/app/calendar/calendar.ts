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
  weeks: (number | null)[][] = [];

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
      title: 'Physical Therapy', 
      time: '7:10 AM',
      description: 'PT with Michael Metzelaar. Arrive by 7:00 AM',
      location: 'St. Anthony\'s hospital. Med Plaza 3 Suite 300'
    },
    { 
      date: 14, 
      title: 'Helmi goes back to Arkansas', 
      time: '15:19 PM',
      description: '',
      location: 'Denver International Airport'
    },
    { 
      date: 15, 
      title: 'Occupational Therapy Eval', 
      time: '7:10 AM',
      description: 'OT Eval with Grace Conner. Arrive by 6:40 AM ',
      location: 'St. Anthony\'s hospital. Med Plaza 3 Suite 300'
    },
    { 
      date: 15, 
      title: 'Speech Therapy Eval', 
      time: '7:50 AM',
      description: 'Speech Eval with Erica Hildreth. Arrive by 7:20 AM ',
      location: 'St. Anthony\'s hospital. Med Plaza 3 Suite 300'
    },
    { 
      date: 15, 
      title: '', 
      time: 'Audry Discharge Date!',
      description: '',
      location: 'St. Anthony\'s hospital. Room 300'
    },
    { 
      date: 18, 
      title: 'X-ray for Neuro', 
      time: '8:00 AM',
      description: 'Go to X-ray for cervical and lumbar spine. Flexible between 18-25 Aug. ',
      location: 'St. Anthony\'s hospital. Med Plaza 2 Room 150'
    },
    { 
      date: 19, 
      title: 'Physical Therapy', 
      time: '10:00 AM',
      description: 'PT with Zachary Chandler. Arrive by 9:50 AM',
      location: 'St. Anthony\'s hospital. Med Plaza 3 Suite 300'
    },
    { 
      date: 20, 
      title: 'Ortho(Hand) Surgery', 
      time: '12:40 PM',
      description: '',
      location: 'Panorma Orthopedics & Spine Center - Golden'
    },
    { 
      date: 22, 
      title: 'Physical Therapy', 
      time: '10:00 AM',
      description: 'PT with Michael Metzelaar. Arrive by 9:50 AM',
      location: 'St. Anthony\'s hospital. Med Plaza 3 Suite 300'
    },
    { 
      date: 22, 
      title: 'Follow up with Dr. Tara Kane (NeuroPsychologist)', 
      time: '12:00 PM',
      description: 'Arrive by 11:45 AM',
      location: 'St. Anthony\'s hospital. Med Plaza 1 Suite 255'
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
    const year = this.year;
    const monthIndex = 7; // August = 7 (0-based: Jan=0)
    const firstDay = new Date(year, monthIndex, 1).getDay(); // Sunday=0, Monday=1...
    const daysInMonth = this.daysInMonth;
  
    // Shift so Monday is first column
    let startOffset = (firstDay === 0 ? 6 : firstDay - 1);
  
    const totalCells = startOffset + daysInMonth;
    const weeks: (number | null)[][] = [];
    let week: (number | null)[] = [];
  
    for (let i = 0; i < startOffset; i++) {
      week.push(null); // empty cell before month start
    }
  
    for (let day = 1; day <= daysInMonth; day++) {
      week.push(day);
      if (week.length === 7) {
        weeks.push(week);
        week = [];
      }
    }
  
    if (week.length > 0) {
      while (week.length < 7) {
        week.push(null); // empty cells after month end
      }
      weeks.push(week);
    }
  
    this.weeks = weeks;
  }

  getAppointmentsForDay(day: number): Appointment[] {
    return this.appointments.filter(app => app.date === day);
  }
  
}

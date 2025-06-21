import { Project } from '@/types/project'

const projects: Project[] = [
  {
    id: 'gohabit-tracker',
    title: 'GoHabit Habit Tracker',
    description:
      'Full-stack platform for habit tracking using Django REST API, Next.js frontend, Celery/Redis for async workflows, and Docker deployment.',
    tech: ['Django', 'Next.js', 'Celery', 'Redis', 'Docker', 'Tailwind'],
    github: 'https://github.com/Kailash-tanniru/Habit-Tracker',
    demo: 'https://gohabit.vercel.app/',
    image: '/images/gohabit.png',
  },
  {
    id: 'self-driving-robot',
    title: 'Self-Driving Robot',
    description:
      'Built an autonomous robot using ultrasonic sensors and microcontrollers. Won award at IIT-Bombay national fair for innovation.',
    tech: ['C++', 'Embedded Systems', 'Sensors'],
    github: '',
    demo: '',
    image: '',
  },
]

export default projects

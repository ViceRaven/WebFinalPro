// src/data/UserData.ts

export interface ExerciseData {
    running: string;
    yoga: string;
    swimming?: string;
  }
  
  export interface UserProfile {
    username: string;
    email: string;
    password: string;
    backgroundColor: string;
    exerciseData: {
      today: ExerciseData;
      thisWeek: ExerciseData;
      allTime: ExerciseData;
    };
  }
  
  export const userData: UserProfile = {
    username: 'JohnDoe',
    email: 'john.doe@example.com',
    password: 'password123',
    backgroundColor: '#ffffff',
    exerciseData: {
      today: {
        running: '5 km',
        yoga: '30 minutes'
      },
      thisWeek: {
        running: '25 km',
        yoga: '3 hours',
        swimming: '2 hours'
      },
      allTime: {
        running: '500 km',
        yoga: '50 hours',
        swimming: '20 hours'
      }
    }
  };
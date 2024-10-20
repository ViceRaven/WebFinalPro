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
  
  export const maxProfile: UserProfile = {
    username: 'Max',
    email: 'max@example.com',
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
  
  export const chloeProfile: UserProfile = {
    username: 'Chloe',
    email: 'chloe@example.com',
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
  
  export const rachelProfile: UserProfile = {
    username: 'Rachel',
    email: 'rachel@example.com',
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
import { ref } from 'vue';

const loggedInUser = ref<{ id: number, name: string, picture: string, adminAccess: boolean } | null>(null);

export const useLoggedInUser = () => {
  const setLoggedInUser = (user: { id: number, name: string, picture: string, adminAccess: boolean }) => {
    loggedInUser.value = user;
    sessionStorage.setItem('loggedInUser', JSON.stringify(user));
  };

  const getLoggedInUser = () => {
    const user = sessionStorage.getItem('loggedInUser');
    if (user) {
      loggedInUser.value = JSON.parse(user);
    }
    return loggedInUser;
  };

  const clearLoggedInUser = () => {
    loggedInUser.value = null;
    sessionStorage.removeItem('loggedInUser');
  };

  return {
    loggedInUser,
    setLoggedInUser,
    getLoggedInUser,
    clearLoggedInUser
  };
};
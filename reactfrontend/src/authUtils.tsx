// authUtils.ts

export const isAuthenticated = (): boolean => {
    const token = localStorage.getItem('token');
    return Boolean(token);
  };
  
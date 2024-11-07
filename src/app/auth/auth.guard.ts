import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router); // Inject the router for navigation

  const isAuthenticated = !!localStorage.getItem('authToken'); // Replace with actual auth check

  if (!isAuthenticated) {
    router.navigate(['/']); // Redirect to login page if not authenticated
    return false;
  }

  return true;
};

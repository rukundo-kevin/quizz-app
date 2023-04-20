import { Role } from '@prisma/client';

const allRoles = {
  [Role.USER]: ['getQuizzes'],
  [Role.ADMIN]: ['getUsers', 'manageUsers', 'getQuizzes']
};

export const roles = Object.keys(allRoles);
export const roleRights = new Map(Object.entries(allRoles));

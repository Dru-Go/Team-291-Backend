// ANCHOR Here we store utility functions that are share by all
import bycript from 'bcryptjs';
// NOTE Parses the input and returns an object
export const parceArgs = (input) => JSON.parse(JSON.stringify(input)); // TODO Test function

export const hashPassword = async (password, length) => await bycript.hash(password, length);

export const isEqual = async (newPassword, storedPassword) => await bycript.compare(newPassword, storedPassword);

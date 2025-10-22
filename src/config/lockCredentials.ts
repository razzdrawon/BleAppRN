/**
 * Lock API Credentials
 * 
 * IMPORTANT: This file contains sensitive credentials.
 * - DO NOT commit this file to version control
 * - Add it to .gitignore
 * - Keep credentials secure
 */

export const LOCK_CREDENTIALS = {
  // API Environment
  environment: 'dev', // 'dev' or 'prod'
  baseURL: 'https://router.smartentry.noke.dev/',
  
  // Account credentials
  email: 'your-email@example.com',
  password: 'your-password',
  
  // Company and Site UUIDs
  companyUUID: '-1',
  siteUUID: 'your-site-uuid',
  
  // Device ID
  deviceId: 'your-device-uuid',
};

// Optional: Export individual values for convenience
export const {
  environment,
  baseURL,
  email,
  password,
  companyUUID,
  siteUUID,
  deviceId,
} = LOCK_CREDENTIALS;

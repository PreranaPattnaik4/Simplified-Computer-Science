import type { Alert, Task } from './types';

export const mockAlerts: Omit<Alert, 'id' | 'timestamp'>[] = [
  {
    title: 'High CPU on Cache Server',
    description: 'CPU utilization has exceeded 95% for the last 15 minutes on server `cache-01`.',
    status: 'new',
  },
  {
    title: 'Database Connection Pool Exhausted',
    description: 'The primary database `pg-main-master` has run out of available connections.',
    status: 'new',
  },
];

export const mockTasks: Omit<Task, 'id' | 'createdAt'>[] = [
    {
        goal: 'Deploy latest web application update to production',
        steps: [
            { description: 'Pull latest from git main branch', status: 'completed', log: 'OK' },
            { description: 'Install dependencies with npm', status: 'completed', log: 'Dependencies installed successfully.' },
            { description: 'Build production assets', status: 'completed', log: 'Build successful.'},
            { description: 'Run automated tests', status: 'pending' },
            { description: 'Push to production servers', status: 'pending' },
            { description: 'Restart production servers', status: 'pending' },
        ],
        status: 'in-progress',
    },
    {
        goal: 'Reboot staging database server',
        steps: [
          { description: 'Connect to staging server via SSH', status: 'completed', log: 'Connection successful.' },
          { description: 'Issue reboot command', status: 'failed', log: 'ERROR: Permission denied.' },
          { description: 'Verify server is back online', status: 'pending' },
        ],
        status: 'failed',
        failureLog: 'Permission denied when issuing reboot command. User `automation-agent` may not have sudo privileges.',
    },
    {
        goal: 'Backup user database',
        steps: [
          { description: 'Connect to database', status: 'completed', log: 'OK' },
          { description: 'Perform pg_dump', status: 'completed', log: 'Dump successful.' },
          { description: 'Compress backup file', status: 'completed', log: 'Compression successful.' },
          { description: 'Upload to S3 cold storage', status: 'completed', log: 'Upload complete.' },
        ],
        status: 'completed',
    }
];

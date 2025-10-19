import { DashboardLayout } from '@/components/dashboard-layout';
import { DashboardClient } from '@/components/dashboard-client';
import { getTasksFromFirestore, getAlertsFromFirestore } from '@/lib/firestore-helpers';
import type { Task, Alert } from '@/lib/types';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const initialTasks = await getTasksFromFirestore();
  const initialAlerts = await getAlertsFromFirestore();

  return (
    <DashboardLayout>
      <DashboardClient initialTasks={initialTasks} initialAlerts={initialAlerts} />
    </DashboardLayout>
  );
}

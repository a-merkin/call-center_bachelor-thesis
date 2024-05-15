export interface Incident {
  id: number;
  fio: string | null;
  group: string | null;
  school: string | null;
  reason: string;
  time: string;
  date: string;
  source: 'call' | 'bot';
  phone: string | null;
  status: 'new' | 'in-progress' | 'completed' | 'cancelled';
}

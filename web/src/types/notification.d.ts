export interface Notification {
  id: string;
  title: string;
  content: string;
  action?: string | null;
  readAt?: Date | null;
  createdAt: Date;
  recipientId: string;
}

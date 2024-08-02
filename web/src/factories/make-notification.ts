import { faker } from "@/libs/faker";
import type { Notification } from "@/types/notification";

export function makeNotification(override: Partial<Notification> = {}) {
  const newNotification: Notification = {
    id: faker.string.uuid(),
    title: faker.lorem.sentence(),
    content: faker.lorem.text(),
    action: null,
    readAt: null,
    createdAt: faker.date.recent(),
    recipientId: faker.string.uuid(),
    ...override,
  };

  return newNotification;
}

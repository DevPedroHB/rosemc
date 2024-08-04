import { Card } from "@/components/ui/card";
import { Page } from "@/components/ui/page";
import type { Metadata } from "next";

interface INotification {
  params: {
    notificationId: string;
  };
}

export async function generateMetadata({
  params,
}: INotification): Promise<Metadata> {
  return {
    title: `Notificação ${params.notificationId}`,
  };
}

export default function Notification({ params }: INotification) {
  return (
    <Page.Root>
      <Card>
        <h1 className="text-lg font-medium">Page Notification</h1>
        <pre>{JSON.stringify(params, null, 2)}</pre>
      </Card>
    </Page.Root>
  );
}

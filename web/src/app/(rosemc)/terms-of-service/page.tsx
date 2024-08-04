import { Card } from "@/components/ui/card";
import { Page } from "@/components/ui/page";
import { faker } from "@/libs/faker";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de serviço",
};

export default function TermsOfService() {
  return (
    <Page.Root>
      <Card>
        {Array.from({ length: 9 }).map((_, index) => {
          return (
            <div key={index}>
              <h1>
                {index + 1}. {faker.lorem.sentence()}
              </h1>
              <p>{faker.lorem.sentences()}</p>
            </div>
          );
        })}
      </Card>
    </Page.Root>
  );
}

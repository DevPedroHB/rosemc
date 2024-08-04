import { Card } from "@/components/ui/card";
import { Page } from "@/components/ui/page";
import { faker } from "@/libs/faker";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equipe",
};

export default function Team() {
  return (
    <Page.Root variant="columns">
      <Page.Column>
        {Array.from({ length: 3 }).map((_, index) => {
          return (
            <Card key={index}>
              <h1 className="text-lg font-medium">
                {index + 1}. {faker.lorem.sentence()}
              </h1>
              <p className="text-primary-600 dark:text-primary-400">
                {faker.lorem.sentences(6)}
              </p>
            </Card>
          );
        })}
      </Page.Column>
      <Page.Column size="sm">
        {Array.from({ length: 3 }).map((_, index) => {
          return (
            <Card key={index} className="text-sm">
              <h1 className="text-base font-medium">
                {index + 1}. {faker.lorem.sentence()}
              </h1>
              <p className="text-primary-600 dark:text-primary-400">
                {faker.lorem.sentences(3)}
              </p>
            </Card>
          );
        })}
      </Page.Column>
    </Page.Root>
  );
}

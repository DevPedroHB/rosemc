import { Card } from "@/components/ui/card";
import { Page } from "@/components/ui/page";
import { faker } from "@/libs/faker";
import type { Metadata } from "next";

interface IProfile {
  params: {
    username: string;
  };
}

export async function generateMetadata({
  params,
}: IProfile): Promise<Metadata> {
  return {
    title: `Perfil de ${params.username}`,
  };
}

export default function Profile({ params }: IProfile) {
  return (
    <Page.Root variant="columns">
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
              <small>Usuário: {params.username}</small>
            </Card>
          );
        })}
      </Page.Column>
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
    </Page.Root>
  );
}

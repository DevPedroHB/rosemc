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
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1>Page Profile</h1>
      <p>Perfil de {params.username}</p>
    </main>
  );
}

import { Loader2 } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";
import { ToggleTheme } from "../toggle-theme";
import { OnlinePlayers } from "./online-players";
import { SearchForm } from "./search-form";

export function Header() {
  return (
    <header className="relative bg-header-img bg-cover bg-center bg-no-repeat">
      <div className="backdrop-blur-sm backdrop-brightness-75">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 p-6">
          <div className="flex-1">
            <Suspense
              fallback={
                <Loader2 className="size-10 animate-spin text-secondary-500" />
              }
            >
              <OnlinePlayers />
            </Suspense>
            <span className="block font-semibold text-primary-50">
              Jogadores online
            </span>
          </div>
          <div className="flex min-w-40 flex-1 items-center justify-center lg:min-w-60">
            <Image
              src="/images/logo.png"
              alt="Logotipo RoseMC."
              width={1000}
              height={1000}
              className="size-40 animate-floating object-cover object-center lg:size-60"
            />
          </div>
          <SearchForm />
          <ToggleTheme className="absolute right-6 top-6 text-primary-50" />
        </div>
      </div>
    </header>
  );
}

import {
  footerContacts,
  footerFollowUs,
  footerLinks,
} from "@/constants/footer-info";
import { cn } from "@/functions/cn";
import { Mail, Send } from "lucide-react";
import Image from "next/image";
import NextLink from "next/link";
import type { ComponentProps } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Link } from "./ui/link";

export function Footer() {
  return (
    <footer className="text-zinc-100 shadow">
      <div className="bg-primary-900">
        <div className="mx-auto max-w-7xl space-y-6 p-6">
          <div className="flex flex-wrap items-center gap-6">
            {footerContacts.map((contact) => {
              const Icon = contact.icon;

              return (
                <div className="flex flex-1 items-center gap-4">
                  <Icon className="size-8 text-secondary-500" />
                  <div className="flex-1">
                    <h4 className="text-nowrap text-xl font-semibold">
                      {contact.title}
                    </h4>
                    <span className="text-primary-400">
                      {contact.description}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="h-px w-full bg-primary-700" />
          <div className="flex flex-wrap gap-6">
            <div className="flex-1 space-y-4">
              <div className="space-y-2">
                <Image
                  src="/images/logo.png"
                  alt="Logotipo RoseMC."
                  width={1000}
                  height={1000}
                  className="size-14 object-cover object-center"
                />
                {/* Pequena descrição */}
                <p className="min-w-64 text-sm text-primary-400">
                  Rede de servidores de Minecraft RoseMC, onde a diversão e a
                  aventura esperam por você. Não somos afiliados à Mojang AB de
                  forma alguma.
                </p>
              </div>
              <div className="space-y-5">
                <FooterTitle>Siga-nos</FooterTitle>
                <div className="flex items-center gap-4">
                  {footerFollowUs.map((followUs) => {
                    return (
                      <NextLink key={followUs.id} href={followUs.path}>
                        <Image
                          src={followUs.logo}
                          alt={followUs.id}
                          width={40}
                          height={40}
                          className="size-10"
                        />
                      </NextLink>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-wrap gap-5">
              {footerLinks.map((fl) => {
                return (
                  <div key={fl.title} className="space-y-10">
                    <FooterTitle>{fl.title}</FooterTitle>
                    <div className="flex flex-col gap-3">
                      {fl.links.map((link) => {
                        return (
                          <Link
                            key={link.path}
                            variant="footer"
                            href={link.path}
                          >
                            {link.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex-1">
              <div className="space-y-10">
                <FooterTitle>Se inscrever</FooterTitle>
                <form className="space-y-3.5">
                  <p className="text-sm text-primary-400">
                    Não deixe de assinar nossos novos feeds, por favor preencha
                    o formulário abaixo.
                  </p>
                  <Input.Root variant="footer">
                    <Input.Slot>
                      <Mail className="size-5" />
                    </Input.Slot>
                    <Input.Control
                      type="email"
                      placeholder="Digite seu e-mail"
                      required
                    />
                  </Input.Root>
                  <Button type="submit" className="ml-auto">
                    Enviar
                    <Send className="size-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-800">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 p-6 text-sm">
          <p className="text-primary-400">
            Copyright &copy; {new Date().getFullYear()}, Todos os direitos
            reservados à{" "}
            <Link href="https://rosemc.vercel.app" target="_blank">
              RoseMC
            </Link>
          </p>
          <div className="flex items-center gap-5">
            <Link variant="footer" href="/terms-of-use">
              Termos de uso
            </Link>
            <Link variant="footer" href="/privacy-policies">
              Políticas de privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface IFooterTitle extends ComponentProps<"h3"> {}

function FooterTitle({ children, className, ...rest }: IFooterTitle) {
  return (
    <h3
      className={cn(
        "relative w-fit text-nowrap text-xl font-semibold",
        "before:absolute before:-bottom-3.5 before:left-0 before:h-0.5 before:w-1/2 before:bg-secondary-500",
        className,
      )}
      {...rest}
    >
      {children}
    </h3>
  );
}

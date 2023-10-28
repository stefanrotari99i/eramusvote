"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Facebook, Lock, LogOut } from "lucide-react";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import React from "react";
import { account } from "../app/appwrite";

const Header = () => {
  const [sesion, setSesion] = React.useState(false);
  React.useEffect(() => {
    const checkSesion = async () => {
      let sesion = await account.getSession('current');
      if(sesion) setSesion(true);
    }
    checkSesion();
  }, []);
  
  const handleLogin  = async () => {
    account.createOAuth2Session("facebook", 'http://localhost:3000/', 'localhost')
;
    
  };
  return (
    <header className="flex justify-between items-center w-full h-16 border-b">
      <div className="flex items-center gap-3">
        <Link href="/" passHref>
          <Image
            src={"/logo.png"}
            alt={"logo"}
            width={180}
            height={70}
            className="dark:hidden"
          />
          <Image
            src={"/logo-dark.png"}
            alt={"logo"}
            width={180}
            height={70}
            className="hidden dark:block"
          />
        </Link>
        <nav className="hidden md:flex gap-4 text-muted-foreground text-sm">
          <Link
            href="/"
            passHref
            className="hover:underline hover:text-primary"
          >
            Pagina principală
          </Link>
          <Link
            href="/despre"
            passHref
            className="hover:underline hover:text-primary"
          >
            Rezultate
            <Badge variant="default" className="ml-2 dark:text-white">
              30 Oct.
            </Badge>
          </Link>
          <Link
            href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.upet.ro%2Fcentdep%2Ferasmus%2B%2Fdoc%2F2023%2FRegulament%2520concurs%2520foto%2520Erasmus%2520v.2023.docx%3Ffbclid%3DIwAR3b9YyvNc98ThTlmCemUAHXilv3kSpvg7qzTsCy-bZU8250ZutUyOLN5jY&h=AT3xM5pGixwP8LwO1gVS-41xi0-qe7nA5O_GSDSN_QFqrQCez8T3ocQZjBM-I9HWth1AMJaBZHRa0GHqQy93eW7Oqdfq9XbmsO-vRHAc3iajTnHFq13m7huzr18Du6ifur5TUzYDrA&__tn__=-UK-R&c[0]=AT1kyxdJULqom433EVQMG7w-7-qCI1KByzbhQ5QOuej6HCcLwHLH-JaMUHxjKmz26HnauIk9jQa5V0frSLjykS8IRlVnCU65LKRDpxZKvppSkGTv95gn7c1NUjXRmwnAG7vQAS6-ql-FjCxdI8H1zVBwBXUjI8a0VMDzcRi2fJESESezdVf3mZg-iEwTkMU4MpgLeZRyw_Vb"
            passHref
            className="hover:underline hover:text-primary"
            target="_blank"
          >
            Regulament
          </Link>
          <Link
            href="/contact"
            passHref
            className="hover:underline hover:text-primary"
          >
            Politica de confidențialitate
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2">
              <Image
                src={"/mugi.jpeg"}
                alt={"logo"}
                width={35}
                height={35}
                className="object-cover rounded-full aspect-square"
              />
              <div className="flex-col items-start hidden sm:flex">
                <p className="text-xs md:text-sm">Stefan Rotair</p>
                <p className="text-xs text-muted-foreground -mt-[2px]">
                  @stefanrotari
                </p>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>
                <Button variant={"destructive"} className="w-full text-left">
                  <LogOut size={16} className="mr-2" />
                  Deconectare
                </Button>
              </DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex items-center gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant={"default"}>
                  <p className="hidden md:block">Autentificare</p>
                  <Lock size={16} className="md:ml-2" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Autentificare</DialogTitle>
                  <DialogDescription className="pb-3">
                    Logați-vă cu contul de Facebook pentru a putea vota.
                  </DialogDescription>
                  <Button variant={"default"} onClick={handleLogin}>
                    <Facebook size={20} className="mr-2" />
                    Autentificare cu Facebook
                  </Button>
                  <p className="text-xs text-muted-foreground py-3">
                    Logarea cu Facebook este necesară pentru a ne asigura că
                    fiecare persoană votează o singură dată.
                  </p>
                  <div className="flex justify-around border-t  items-center gap-2 pt-3 flex-wrap text-muted-foreground text-xs ">
                    <Link
                      href="https://www.upet.ro/.../Regulament%20concurs%20foto..."
                      passHref
                      className="hover:underline"
                      target="_blank"
                    >
                      Regulament
                    </Link>
                    <Link
                      href="/termeni-si-conditii"
                      passHref
                      className="hover:underline"
                    >
                      Termeni și condiții
                    </Link>
                    <Link
                      href="/politica-de-confidentialitate"
                      passHref
                      className="hover:underline"
                    >
                      Politica de confidențialitate
                    </Link>
                  </div>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flex md:justify-between py-3 flex-wrap justify-center items-center gap-y-4 w-full  border-t">
        <Link href="/" passHref>
            <Image
            src={"/logo.png"}
            alt={"logo"}
            width={130}
            height={70}
            className="dark:hidden"
            />
            <Image
            src={"/logo-dark.png"}
            alt={"logo"}
            width={130}
            height={70}
            className="hidden dark:block"
            />
        </Link>
        <nav className="flex gap-x-4 gap-y-2 text-muted-foreground text-xs flex-wrap justify-center">
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
            </Link>
            <Link
            href="/parteneri"
            passHref
            className="hover:underline hover:text-primary"
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
            <p className="text-muted-foreground text-xs">
                Powered by 
                <Link
                href="https://www.facebook.com/stefan.rotari99"
                passHref
                target='_blank'
                className="hover:underline text-primary"
                >
                {' '}Stefan Rotari
                </Link>
            </p>
        </nav>
    </footer>
  )
}

export default Footer
"use client";

import * as React from "react";
import Link from "next/link";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";

import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

// Company Services
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Mobile App Development",
    href: "/services/mobile-app-development",
    description:
      "Build high-performance cross-platform apps for iOS and Android using Flutter and native tools.",
  },
  {
    title: "Web Development",
    href: "/services/web-development",
    description:
      "Responsive, modern web apps built with React.js, Node.js, and scalable backend architecture.",
  },
  {
    title: "AI & ML Solutions",
    href: "/services/ai-ml",
    description:
      "Leverage machine learning and AI to automate, predict, and enhance your business operations.",
  },
  {
    title: "UI/UX Design",
    href: "/services/ui-ux",
    description:
      "Craft beautiful, user-centric interfaces and seamless experiences for your digital products.",
  },
  {
    title: "Cloud Integration",
    href: "/services/cloud",
    description:
      "Deploy, manage, and scale your infrastructure using Google Cloud Platform, Firebase, and more.",
  },
  {
    title: "Custom Software",
    href: "/services/custom-software",
    description:
      "Tailor-made software solutions designed to meet your exact business needs.",
  },
];

export function NavigationMenuDemo() {
  return (
    <div className="bg-white rounded-lg shadow-md px-6 py-1">
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <Image
            src="/logo-secondary-T.png"
            alt="Logo"
            width={120}
            height={30}
            className="mr-2"
          />
        </div>

        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Home</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mt-4 mb-2 text-lg font-medium">
                          Waveloop
                        </div>
                        <p className="text-muted-foreground text-sm leading-tight">
                          Building smart digital solutions with modern tech.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/about" title="Who We Are">
                    Discover Waveloops mission, team, and our commitment to
                    innovation.
                  </ListItem>
                  <ListItem href="/portfolio" title="Our Work">
                    Explore some of the projects we have crafted for our
                    clients.
                  </ListItem>
                  <ListItem href="/technologies" title="Technologies">
                    A stack that includes Flutter, React, Node, Firebase, and
                    Google Cloud.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Blogs</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/blog">
                        <div className="font-medium">Blog</div>
                        <div className="text-muted-foreground">
                          Industry insights, tech updates & Waveloop stories.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/blog/category/ui-ux">
                        <div className="font-medium">UI/UX Trends</div>
                        <div className="text-muted-foreground">
                          Tips, design inspiration, and case studies.
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/about">Our Story</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/team">Meet the Team</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/careers">Careers</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Contact Us</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/contact-us"
                        className="flex-row items-center gap-2"
                      >
                        <CircleHelpIcon />
                        Contact Support
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/request-quote"
                        className="flex-row items-center gap-2"
                      >
                        <CircleIcon />
                        Request a Quote
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/partnerships"
                        className="flex-row items-center gap-2"
                      >
                        <CircleCheckIcon />
                        Partner with Us
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

import {
  Menu,
  Zap,
  Code,
  Smartphone,
  Cloud,
  Brain,
  HelpCircle,
  Activity,
  FileText,
} from "lucide-react";
import Image from "next/image";

import { Facebook, Instagram, Linkedin, Github } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import logoImage from "@/public/logo-secondary-T.png";
import Link from "next/link";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const Navbar1 = ({
  logo = {
    url: "./",
    alt: "logo",
    title: "WAVELOOP",
  },
  menu = [
    { title: "Home", url: "#" },
    {
      title: "Services",
      url: "#",
      items: [
        {
          title: "Web Development",
          description: "Custom web applications and responsive websites",
          icon: <Code className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Mobile Development",
          description: "iOS and Android mobile applications",
          icon: <Smartphone className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "AI & Machine Learning",
          description: "Intelligent solutions and data analytics",
          icon: <Brain className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Cloud Solutions",
          description: "Scalable cloud infrastructure and deployment",
          icon: <Cloud className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "DevOps & Automation",
          description: "Streamline your development and deployment processes",
          icon: <Activity className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Cybersecurity",
          description: "Protect your digital assets and infrastructure",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "Resources",
      url: "#",
      items: [
        {
          title: "Help Center",
          description: "Get all the answers you need right here",
          icon: <HelpCircle className="size-5 shrink-0" />,
          url: "#",
        },
        // {
        //   title: "Status",
        //   description: "Check the current status of our services and APIs",
        //   icon: <Activity className="size-5 shrink-0" />,
        //   url: "#",
        // },
        {
          title: "Terms of Service",
          description: "Our terms and conditions for using our services",
          icon: <FileText className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
    {
      title: "Blog",
      url: "#",
    },
  ],
}: Navbar1Props) => {
  return (
    <section className="absolute w-fit h-fit z-10 top-8 left-0 right-0 flex py-2 bg-white rounded-md m-auto shadow-lg">
      <div className="container px-4">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <Image src={logoImage} alt="Logo" width={120} height={30} />
            </a>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList className="gap-4">
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex items-center ml-8">
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold"
            >
              <a href="/contact-us">Contact Us</a>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="w-full lg:hidden">
          <div className="flex w-full items-center gap-16 justify-between">
            {/* Logo */}
            <a href={logo.url} className="flex items-center">
              <Image src={logoImage} alt="Logo" width={120} height={30} />
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto flex flex-col justify-between">
                <div>
                  <SheetHeader>
                    <SheetTitle>
                      <a href={logo.url} className="flex items-center gap-2">
                        <Image
                          src={logoImage}
                          alt="Logo"
                          width={120}
                          height={30}
                          className="mt-4"
                        />
                      </a>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-6 p-4">
                    <Accordion
                      type="single"
                      collapsible
                      className="flex w-full flex-col gap-4"
                    >
                      {menu.map((item) => renderMobileMenuItem(item))}
                    </Accordion>
                  </div>
                  <div className="flex items-center px-4 py-8">
                    <Button
                      asChild
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold w-full"
                    >
                      <a href="/contact-us">Contact Us</a>
                    </Button>
                  </div>
                </div>
                <div className="text-center py-8 lg:text-left">
                  <h3 className="text-base sm:text-lg font-semibold mb-4">
                    Stay Connected with Us
                  </h3>
                  <div className="flex space-x-4 justify-center lg:justify-start">
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors p-1"
                    >
                      <Instagram size={20} />
                    </Link>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors p-1"
                    >
                      <Linkedin size={20} />
                    </Link>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors p-1"
                    >
                      <Github size={20} />
                    </Link>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors p-1"
                    >
                      <Facebook size={20} />
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.title === "Services" ? (
            <div className="grid grid-cols-2 gap-2 p-2 w-[500px]">
              {item.items.map((subItem) => (
                <NavigationMenuLink asChild key={subItem.title}>
                  <SubMenuLink item={subItem} />
                </NavigationMenuLink>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-2 p-4 w-[300px]">
              {item.items.map((subItem) => (
                <NavigationMenuLink asChild key={subItem.title}>
                  <SubMenuLink item={subItem} />
                </NavigationMenuLink>
              ))}
            </div>
          )}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex flex-row gap-3 rounded-md p-2 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export { Navbar1 };
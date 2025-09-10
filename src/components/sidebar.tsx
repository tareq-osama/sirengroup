"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// Simple navigation structure for marketing site
const navigation = [
  {
    title: "Home",
    url: "/",
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <span className="text-sm font-bold">C</span>
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">Tareq</span>
            <span className="truncate text-xs">Client Portal</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <nav className="space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.url}
              href={item.url}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                pathname === item.url
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}>
              {item.title}
            </Link>
          ))}
        </nav>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-4 text-xs text-muted-foreground">
          © 2024 Tareq
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
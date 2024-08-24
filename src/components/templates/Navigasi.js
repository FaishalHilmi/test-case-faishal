"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import { ChevronDown } from "../../app/icons";

export default function Navigasi() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
  };

  return (
    <nav className="bg-white relative z-30">
      <div className="lg:px-[150px] lg:pt-6 fixed w-full">
        <Navbar
          onMenuOpenChange={setIsMenuOpen}
          className="bg-white shadow-lg text-black lg:w-fit mx-auto lg:rounded-xl"
          variant="sticky"
        >
          <NavbarContent className="pe-10">
            <NavbarBrand>
              <img src="/images/Logo.png" alt="Logo" className="w-[142px]" />
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent text-customBlue font-medium"
                    endContent={icons.chevron}
                    radius="sm"
                    variant="light"
                  >
                    Features
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="ACME features"
                className="w-[340px] bg-white text-black rounded mt-3"
                itemClasses={{
                  base: "gap-4",
                }}
              >
                <DropdownItem key="autoscaling">Autoscaling</DropdownItem>
                <DropdownItem key="usage_metrics">Usage Metrics</DropdownItem>
                <DropdownItem key="production_ready">
                  Production Ready
                </DropdownItem>
                <DropdownItem key="99_uptime">+99% Uptime</DropdownItem>
                <DropdownItem key="supreme_support">
                  +Supreme Support
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <NavbarItem isActive>
              <Link href="#" aria-current="page" className="font-medium">
                Customers
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#" className="font-medium">
                Integrations
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end" className="hidden lg:flex">
            <NavbarItem>
              <Button
                as={Link}
                color="primary"
                href="#"
                variant="flat"
                className="bg-customBlue text-white rounded-md px-8"
              >
                Sign In
              </Button>
            </NavbarItem>
          </NavbarContent>

          {/* Menu Toggle for mobile view */}
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden text-customBlue"
          />

          {/* Menu for mobile view */}
          <NavbarMenu
            className={`bg-white text-black text-center pt-4 mb-3 ${
              isMenuOpen ? "block h-auto" : "hidden"
            }`}
          >
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    endContent={icons.chevron}
                    radius="sm"
                    variant="light"
                  >
                    Features
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="ACME features"
                className="w-[340px] bg-slate-100 text-black rounded"
                itemClasses={{
                  base: "gap-4",
                }}
              >
                <DropdownItem key="autoscaling">Autoscaling</DropdownItem>
                <DropdownItem key="usage_metrics">Usage Metrics</DropdownItem>
                <DropdownItem key="production_ready">
                  Production Ready
                </DropdownItem>
                <DropdownItem key="99_uptime">+99% Uptime</DropdownItem>
                <DropdownItem key="supreme_support">
                  +Supreme Support
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <NavbarItem className="mb-2">
              <Link href="#">Pricing</Link>
            </NavbarItem>
            <NavbarItem className="mb-2">
              <Link href="#">Demo</Link>
            </NavbarItem>
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="w-full rounded-xl bg-customBlue text-white data-[hover=true]:bg-transparent"
                    endContent={icons.chevron}
                    radius="sm"
                    variant="light"
                  >
                    Sign In
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="ACME features"
                className="w-[340px] text-black rounded text-center"
                itemClasses={{
                  base: "gap-4",
                }}
              >
                <DropdownItem
                  key="autoscaling"
                  className="bg-slate-100 text-gray-500 rounded-xl mb-2"
                >
                  Sign In as Admin
                </DropdownItem>
                <DropdownItem
                  key="usage_metrics"
                  className="text-gray-500 rounded-xl"
                >
                  Usage Metrics
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarMenu>
        </Navbar>
      </div>
    </nav>
  );
}

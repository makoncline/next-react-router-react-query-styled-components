import React from "react";
import styled, { css } from "styled-components";
import logo from "../images/icon.png";
import { elevation, fixed, absolute } from "../utilities";
import { ThemeButton } from "../components";
import { below, above } from "../utilities";
import { Link } from "react-router-dom";
import Image from "next/image";

const navLinks = [{ label: "About", url: "/about", description: "" }];

const HeaderComponent = ({ className }: { className?: string }) => (
  <>
    <header className={className}>
      <h2 className="logo">
        <Link aria-label="home page" to="/">
          <Image src={logo} alt="logo" />
        </Link>
      </h2>
      <Nav>
        {navLinks.map(({ url, label, description }) => (
          <a key={label} href={url} aria-label={description}>
            {label}
          </a>
        ))}
      </Nav>
      <ThemeButton />
    </header>
    <MobileNav>
      {navLinks.map(({ url, label, description }) => (
        <a key={label} href={url} aria-label={description}>
          {label}
        </a>
      ))}
    </MobileNav>
  </>
);

export const Header = styled(HeaderComponent)`
  background: var(--header-bg);
  padding: 0 var(--container-padding);
  ${elevation[1]};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  .logo {
    img {
      height: var(--icon-size);
      width: auto;
    }
  }
  & > * {
    display: flex;
    align-items: center;
  }
  & > * > * {
    height: 100%;
  }
`;

const Nav = styled.nav`
  width: 100%;
  a {
    display: flex;
    align-items: center;
    grid-row: 1/2;
    margin-left: var(--space);
  }
  ${below.sm`
      display: none;
    `}
`;

const MobileNav = styled.nav`
  ${fixed({ yProp: 'bottom' })};
  ${elevation[1]};
  padding: 0 var(--container-padding);
  background: var(--header-bg);
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  & > * {
    display: flex;
    align-items: center;
  }
  ${above.sm`
      display: none;
    `}
`;
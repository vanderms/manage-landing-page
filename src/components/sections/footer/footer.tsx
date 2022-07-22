import { NewsletterForm } from "@/components/forms/newsletter/newsletter-form";
import Logo from "@/assets/logo-white.svg";
import React from "react";

const LinksSubList: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <li>
      <ul className={`flex flex-col gap-[0.8125rem] items-start`}>{children}</ul>
    </li>
  );
};

const LinkItem: React.FC<{ href: string; children: React.ReactNode }> = (props) => {
  return (
    <li>
      <a href={props.href} className="text-[0.9375rem] text-neutral-50 hover:text-primary">
        {props.children}
      </a>
    </li>
  );
};

const SocialMediaLinkItem: React.FC<{ href: string; aria: string }> = (props) => {
  return (
    <li>
      <a
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        className="social-media-icon"
        aria-label={props.aria}
      ></a>
    </li>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="ctn py-12 bg-neutral-850">
      <div className="max-w-[26.25rem] mx-auto">
        <NewsletterForm />
        <ul className="flex justify-around mt-14">
          <LinksSubList>
            <LinkItem href="/#">Home</LinkItem>
            <LinkItem href="/#">Pricing</LinkItem>
            <LinkItem href="/#">Products</LinkItem>
            <LinkItem href="/#">About Us</LinkItem>
          </LinksSubList>
          <LinksSubList>
            <LinkItem href="/#">Careers</LinkItem>
            <LinkItem href="/#">Community</LinkItem>
            <LinkItem href="/#">Privacy Policy</LinkItem>
          </LinksSubList>
        </ul>
        <ul className="flex gap-[0.875rem] justify-center mt-12">
          <SocialMediaLinkItem href="https://www.facebook.com" aria="facebook" />
          <SocialMediaLinkItem href="https://www.youtube.com" aria="youtube" />
          <SocialMediaLinkItem href="https://www.twitter.com" aria="twitter" />
          <SocialMediaLinkItem href="https://www.pinterest.com" aria="pinterest" />
          <SocialMediaLinkItem href="https://www.instagram.com" aria="instagram" />
        </ul>
        <div className="flex justify-center mt-14">
          <a href="/#" aria-label="Homepage">
            <img src={Logo} alt="" />
          </a>
        </div>
        <p className="mt-12 text-neutral-50 opacity-50 text-[0.8125rem] text-center">
          Copyright 2020. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

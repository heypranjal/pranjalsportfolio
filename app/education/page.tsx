import CodeSnippet from "@/components/code-snippet";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";
import { HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { HoverCard } from "@/components/ui/hover-card";
import { code } from "@/config/codeContent";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const EducationPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Education</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          I learned a lot, but the real learning happens in the code editor!
        </PageHeaderHeading>
        <PageHeaderDescription>
          Education has always been the cornerstone of my journey into the tech
          world. Pursuing a Bachelor's in Computer Science (ABES engineering College) in Ghaziabad
          has provided me with a solid foundation in computer
          science and software engineering principles.
        </PageHeaderDescription>

        <PageHeaderDescription>
          My academic journey has been complemented by hands-on projects and
          coursework, enabling me to build practical skills and a deep
          understanding of modern technological solutions.
        </PageHeaderDescription>
      </PageHeader>

      <ol className="relative mb-10 border-gray-200 border-s dark:border-gray-700">
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Full Stack Developer · Quaff Media Pvt Ltd ·
            <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">
              Latest
            </span>
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            August. 2024 - Present
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            I am currently working as a Fullstack Developer at a startup,
            focusing on building responsive user interfaces and enhancing user
            experiences through modern web technologies
          </p>

          <HoverCard>
            <HoverCardTrigger className="cursor-pointer ">{/* placeholder */}</HoverCardTrigger>
            <HoverCardContent>
              <p>
                <Link
                  href={siteConfig.bitinfonepal}
                  className="underline cursor-pointer underline-offset-4"
                >
                  {/* bitinfonepal.com */}
                </Link>
              </p>
            </HoverCardContent>
          </HoverCard>
        </li>

        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Bachelors in Computer Science · Abes Engineering College ·
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            May 2021 - Oct. 2024
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            I completed my B.Tech in Computer Science with a focus on web
            development and full-stack application building.
          </p>
        </li>
      </ol>

      <CodeSnippet code={code.educationJourney} title="educationJourney.ts" />

      <Pager
        prevHref="/experience"
        nextHref="/contact"
        prevTitle="Experience"
        nextTitle="Contact"
      />
    </>
  );
};

export default EducationPage;

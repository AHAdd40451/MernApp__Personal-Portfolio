import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaLinkedin } from "react-icons/fa6";

const Timeline2 = () => {
  return (
    <div className="py-20 px-5  text-transparent">
      <section id="services">
        <h5> What Skills I Have</h5>
        <h2>PROFESSIONAL EXPERIENCE</h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{
              background: "#282b30",
              color: "#fff",
              borderRadius: "1rem",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #282b30" }}
            date="Sep 2023 - Present "
            iconStyle={{ background: "#4db5ff", color: "#fff" }}
            // icon={<WorkIcon />}
          >
            <div className="text-md text-white-500 ">
              <div className="flex items-center gap-2">
                <label className="font-medium text-[#4db5ff]">
                  HashOne Digital
                </label>
                <a
                  href="https://www.linkedin.com/company/hashone-digital"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </div>
              <span className=" text-sm relative top-2">
                Full Stack Developer | SaaS | On-Site
              </span>
            </div>
            <div className="mt-2 text-white-700 ">
              <p className="flex gap-[0.2rem] flex-col">
                <p>
                  - Developed
                  <a
                    href="https://www.hashoneglobal.com/"
                    target="_blank"
                    className="px-2"
                  >
                    Hashone Global
                  </a>
                  Company Website using Next.js with TypeScript and integrated
                  Sanity CMS, enabling server-side rendering and API
                  implementation.
                </p>

                <p>
                  - Developed
                  <a
                    href="https://dogtor-webapp.vercel.app/"
                    target="_blank"
                    className="px-2"
                  >
                    Dogtor
                  </a>
                  Ecommerce Project For Spanish Client Using Next Typesctipt
                  Nest
                </p>
                <p>
                  <a
                    href="https://www.docda.ai/"
                    target="_blank"
                    className="px-2"
                  >
                    - Docda:
                  </a>
                  Designed and integrated the Frontend of a Doctor Appointment
                  PWA using React and Google Maps APIs.
                </p>
                <p>
                  <a
                    href="https://app.behobbyist.com/"
                    target="_blank"
                    className="px-2"
                  >
                    - Behobbyist:
                  </a>
                  Built a social platform website's Frontend and Backend
                  utilizing the MERN stack.
                </p>
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2022 - Mar 2023 · 1 yr 3 mos"
            iconStyle={{ background: "#282b30", color: "#fff" }}
            contentStyle={{
              background: "#282b30",
              color: "#fff",
              borderRadius: "1rem",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #282b30" }}

            // icon={<WorkIcon />}
          >
            <div className="text-md text-white-500 ">
              <div className="flex items-center gap-2">
                <label className="font-medium text-[#4db5ff]">Nixaam</label>
                <a
                  href="https://www.linkedin.com/company/nixaam/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </div>

              <span className=" text-sm relative top-2">
                Mern Stack Developer | PaaS | On-Site
              </span>
            </div>
            <div className=" text-white-700 ">
              <p className="flex gap-[0.2rem] flex-col">
                <p>
                  -
                  <a
                    href="https://www.dcmcloud.com/"
                    target="_blank"
                    className="px-1"
                  >
                    DCMCloud :
                  </a>
                  Web-Based DICOM Viewer for Medical Imaging
                </p>

                <p>
                  - Integrated advanced rich text editor in DCMCloud to enhance
                  image annotations.
                </p>
                <p>
                  - Synced MongoDB Database with CouchDB for layered backup and
                  replication.
                </p>
                <p>
                  - Integrated HyperLedger Fabric Backend for an added layer of
                  security.
                </p>
                <p>
                  - Deployed v16 with HLF Backend on a single EC2 instance using
                  Docker with Kubernetes clusters for efficient scaling.
                </p>
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2022 - Nov 2022 · 4 mos"
            iconStyle={{ background: "#4db5ff", color: "#fff" }}
            contentStyle={{
              background: "#282b30",
              color: "#fff",
              borderRadius: "1rem",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #282b30" }}
          >
            <div className="text-md text-white-500 ">
              <span className=" text-sm relative top-2">
                JavaScript Developer | Freelance |
                <a
                  href="https://www.google.com/url?q=https://www.upwork.com/freelancers/ahadkhan54&sa=D&source=apps-viewer-frontend&ust=1717946870852070&usg=AOvVaw1fJMvbnD67acssprW9isEl&hl=en"
                  target="_blank"
                  className="px-1"
                >
                  UpWork
                </a>
              </span>
            </div>
            <div className="mt-2 text-white-700 ">
              <p className="flex gap-[0.2rem] flex-col">
                <p>
                  - Integrated Stripe payment in
                  <a
                    href="https://blueclerk.com/"
                    target="_blank"
                    className="px-1"
                  >
                    BLUECLERK
                  </a>
                  gateway for secure transactions.
                </p>
              </p>
              <p>
                - Implemented authentication and state management flow using
                Redux and React.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "#282b30", color: "#fff" }}
            // icon={<StarIcon />}
          />
        </VerticalTimeline>
      </section>
    </div>
  );
};

export default Timeline2;

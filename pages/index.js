import Head from "next/head";
// import styles from '../styles/Home.module.css'

const Divider = () => (
  <div
    className="mb-2"
    style={{
      height: "1px",
      width: "100%",
      backgroundColor: "gray",
    }}
  />
);

export default function Home() {
  return (
    <div>
      <Head>
        <title>Inho Han CV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-mono p-4 md:h-screen md:flex md:justify-center md:space-x-4 md:container md:mx-auto md:max-w-screen-lg">
        <div className="md:flex-none md:p-1">
          <div className="flex flex-col items-center space-y-2 mb-4 p-4 shadow rounded-md">
            <img
              src="/profile_image.jpg"
              className="object-cover h-56 w-56 rounded-full"
            ></img>
            <div className="text-xl font-extrabold">Inho Han</div>
            <div className="flex flex-row space-x-2 items-center">
              <a href="mailto:oneitwoh@gmail.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>

              <a href="https://github.com/1i2hs">
                <svg
                  role="img"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>GitHub icon</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>

              <a href="https://www.linkedin.com/in/inho-han-b4824791/">
                <svg
                  role="img"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>LinkedIn icon</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
            <p className="text-base">
              🧑🏻‍💻 Web Full-stack Developer
              <br />
              🧑🏻‍🏫 Programming Educator
              <br />
              🎭 Occasional UX Designer
              <br />
              🗣 Korean & English & Japanese
              <br />
              📍 Seoul, Korea
              <br />
              🏢 Working @ SAP Labs Korea
            </p>
          </div>
          <div className="flex flex-row justify-around space-x-3 mb-4">
            <a
              className="flex-1 text-sm text-center rounded border-2 border-blue-600 font-bold text-blue-600 p-1.5 cursor-pointer hover:bg-blue-300"
              href="#Profile"
            >
              Profile
            </a>
            <a
              className="flex-1 text-sm text-center rounded border-2 border-blue-600 font-bold text-blue-600 p-1.5 cursor-pointer hover:bg-blue-300"
              href="#Skills"
            >
              Skills
            </a>
            <a
              className="flex-1 text-sm text-center rounded border-2 border-blue-600 font-bold text-blue-600 p-1.5 cursor-pointer hover:bg-blue-300"
              href="#Experiences"
            >
              Exp.
            </a>
            <a
              className="flex-1 text-sm text-center rounded border-2 border-blue-600 font-bold text-blue-600 p-1.5 cursor-pointer hover:bg-blue-300"
              href="#Education"
            >
              Edu.
            </a>
          </div>
        </div>
        <div className="flex flex-col md:overflow-y-auto md:p-1">
          <div id="Profile" className="shadow rounded-md p-4">
            <div className="text-l font-bold text-blue-500 mb-2">
              Profile 📝
            </div>
            <ul className="list-inside list-disc">
              <li className="text-sm mb-2">
                Develop and maintain multiple web services which monitor,
                analyze, and visualize quality metrics of the relational
                database product.
              </li>
              <li className="text-sm mb-2">
                Developed and maintained large scale cloud based API services
                using Scala and Java. Plus, breaking a monolithic system into
                multiple microservices.
              </li>
              <li className="text-sm mb-2">
                Performed visualization of analyzed unstructured data using
                React, Node.js, vanilla JavaScript, and big data analysis
                solution.
              </li>
              <li className="text-sm mb-2">
                Over 6 years of experience in IT industry mainly in mobile and
                web application(back-end and front-end) development as a
                software developer.
              </li>
              <li className="text-sm mb-2">
                Experienced entire life cycle of product including planning,
                designing, development and operating while running a start-up
                company.
              </li>
            </ul>
          </div>
          <div id="Skills" className="shadow rounded-md p-4 mt-4">
            <div className="text-l font-bold text-pink-500 mb-2">Skills 🛠</div>
            <div id="skills-text">
              <div className="mb-2">
                <div className="text-base font-semibold mb-1">
                  Programming Languages
                </div>
                <ul className="list-inside list-disc text-sm">
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>Java</li>
                  <li>Scala</li>
                  <li>Rust(beginner)</li>
                </ul>
              </div>
              <div className="mb-2">
                <div className="text-base font-semibold mb-1">
                  Frameworks & Libraries
                </div>
                <div className="text-sm font-medium mb-1 inline-block bg-blue-400 pl-1 pr-1">
                  Web Front-end
                </div>
                <ul className="list-inside list-disc text-sm mb-2">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Vue.js</li>
                  <li>jQuery</li>
                  <li>LitElement(Web Component)</li>
                </ul>
                <div className="text-sm font-medium mb-1 inline-block bg-green-400 pl-1 pr-1">
                  Web Back-end
                </div>
                <ul className="list-inside list-disc text-sm">
                  <li>Express</li>
                  <li>Next.js</li>
                  <li>NestJS</li>
                </ul>
              </div>
              <div className="mb-2">
                <div className="text-base font-semibold mb-1">
                  Programming Paradigms
                </div>
                <ul className="list-inside list-disc text-sm">
                  <li>Functional</li>
                  <li>Object Oriented</li>
                </ul>
              </div>
              <div className="mb-2">
                <div className="text-base font-semibold mb-1">Databases</div>
                <ul className="list-inside list-disc text-sm">
                  <li>MariaDB</li>
                  <li>SAP Hana</li>
                  <li>MongoDB</li>
                  <li>Redis</li>
                </ul>
              </div>
              <div className="mb-2">
                <div className="text-base font-semibold mb-1">
                  Git Repositories
                </div>
                <ul className="list-inside list-disc text-sm">
                  <li>GitHub</li>
                  <li>Gerrit</li>
                </ul>
              </div>
              <div className="mb-2">
                <div className="text-base font-semibold mb-1">CI/CD</div>
                <ul className="list-inside list-disc text-sm">
                  <li>Jenkins</li>
                  <li>GitHub Actions</li>
                </ul>
              </div>
              <div className="mb-2">
                <div className="text-base font-semibold mb-1">Operation</div>
                <ul className="list-inside list-disc text-sm">
                  <li>Container(Docker)</li>
                  <li>Kubernetes</li>
                </ul>
              </div>
              <div className="mb-2">
                <div className="text-base font-semibold mb-1">
                  Natural Language
                </div>
                <ul className="list-inside list-disc text-sm">
                  <li>Korean</li>
                  <li>English</li>
                  <li>Japanese</li>
                </ul>
              </div>
            </div>
          </div>
          <div id="Experiences" className="shadow rounded-md p-4 mt-4">
            <div className="text-l font-bold text-green-500 mb-2">
              Experiences 🧭
            </div>

            {/* SAP Labs Korea */}
            <div className="mb-6">
              <div className="text-l font-extrabold text-blue-400 mb-2">
                SAP Labs Korea (NOW)
              </div>
              <Divider />
              <div className="mb-4">
                <div className="text-base font-semibold mb-1">
                  Team: QA Infrastructure Service Development
                </div>
                <div className="text-sm font-normal text-gray-500 mb-1">
                  🧑🏻‍💻Web Full-Stack developer
                </div>
                <div className="text-sm font-normal text-gray-500 mb-2">
                  🗓2020.01 -
                </div>
                <ul className="list-inside list-disc font-extralight text-sm">
                  <li className="mb-1">
                    develop & maintain a web service which displays a dashboard
                    of the relational database product's quality metrics.
                  </li>
                  <li className="mb-1">
                    develop & maintain a web service which visualize the
                    delivery status of a certain group of features and
                    fixes(a.k.a. release) of the Relational Database product.
                    There are several versions of the product(from new versions
                    to old versions) and those features and fixes must be
                    applied differently depending on the version since some
                    features are not compatible with some versions. The
                    visualization of the delivery status helped the delivery
                    team to easily check whether features and fixes are applied
                    to the appropriate version or not.
                  </li>
                  <li className="mb-1">
                    incrementally designing and developing a reference project
                    directory structure of Node.js/JavaScript(for Front-end
                    dev.) project for the team.
                  </li>
                </ul>
              </div>
            </div>

            {/* IBM Korea */}
            <div className="mb-6">
              <div className="text-l font-extrabold text-blue-600 mb-2">
                IBM Korea
              </div>
              <Divider />
              <div className="mb-4">
                <div className="text-base font-semibold mb-1">
                  Team: The Weather Company
                </div>
                <div className="text-sm font-normal text-gray-500 mb-1">
                  🧑🏻‍💻Back-end API service developer
                </div>
                <div className="text-sm font-normal text-gray-500 mb-2">
                  🗓2018.08 - 2019.12
                </div>
                <ul className="list-inside list-disc font-extralight text-sm">
                  <li className="mb-1">
                    developing and testing backend API microservices written in
                    Scala and Java and running them on the cloud environment.
                  </li>
                  <li className="mb-1">
                    maintaining monolith and microservices running on cloud
                    environment.
                  </li>
                  <li className="mb-1">
                    decomposing legacy monolithic codes into multiple
                    microservices(Cloud native applications).
                  </li>
                  <li className="mb-1">
                    all development processes followed the scrum framework.
                  </li>
                  <li className="mb-1">
                    working with a software engineer in test and a DevOps
                    engineer as one team.
                  </li>
                  <li>
                    writing technical documentation(README file) about
                    microservices within remote code repositories.
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <div className="text-base font-semibold mb-1">
                  Team: Cognitive Analytics & Knowledge Solution
                </div>
                <div className="text-sm font-noraml text-gray-500 mb-1">
                  🧑🏻‍💻Front-end web developer & Data analyst
                </div>
                <div className="text-sm font-normal text-gray-500 mb-2">
                  🗓2018.02 - 2018.08
                </div>
                <div className="mb-2">
                  <div className="text-sm font-semibold text-blue-800 mb-1">
                    Project: Intelligent Social Listening, QA Data Analysis(IT
                    domain)
                  </div>
                  <div className="text-sm font-extralight underline mb-1.5">
                    Analyzing unstructured text data(big data) to let users to
                    find insights from it.
                  </div>
                  <ul className="list-inside list-disc font-extralight text-sm">
                    <li className="mb-1">
                      Mining meaningful domain-specific phrases from text-based
                      big data by collaborating with subject-matter expert.
                    </li>
                    <li>
                      Grouping phrases/words that have the similar/same meaning
                      within a domain, conceptualizing those as one
                      representative phrase.
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="text-sm font-semibold text-blue-800 mb-1">
                    Project: Document Classification & Search Console
                    Application Development
                  </div>
                  <div className="text-sm font-extralight underline mb-1.5">
                    Let users search similar domain-specific documents from user
                    provided DOCUMENT(in text form), not from keywords, to make
                    users find relevant documents in short time and focus on
                    their main work.
                  </div>
                  <ul className="list-inside list-disc font-extralight text-sm">
                    <li className="mb-1">
                      Developed a web application which visualizes analyzed
                      unstructured data with various kinds of graph or chart.
                    </li>
                    <li className="mb-1">
                      The application let users search similar documents with
                      inputs(which can be either just sequence of texts or long
                      document text) they provide and show keywords those are
                      frequently used in various kinds of visualization: word
                      cloud, bar chart, and simple table.
                    </li>
                    <li>
                      Designed the architecture of the application:
                      <ul className="list-inside list-disc font-extralight text-sm ml-4">
                        <li className="mb-1">
                          API server(Express): expose REST APIs to provide
                          refined data as a response by using IBM big data
                          analysis solution
                        </li>
                        <li className="mb-1">
                          Web server(Express): a server that provides a React
                          application to users.
                        </li>
                        <li>Front-end application(React)</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="text-base font-semibold mb-1">Team: Cloud</div>
                <div className="text-sm font-normal text-gray-500 mb-1">
                  🧑🏻‍💻Web developer(Intern)
                </div>
                <div className="text-sm font-normal text-gray-500 mb-2">
                  🗓2017.11 - 2018.02
                </div>
                <div className="mb-2">
                  <div className="text-sm font-semibold text-blue-800 mb-1">
                    Project: Kubernetes Monitoring Application
                  </div>
                  <ul className="list-inside list-disc font-extralight text-sm">
                    <li className="mb-1">
                      Developed web application which monitors and visualizes
                      real-time state of nodes and workloads(deployments, pods,
                      etc) inside Kubernetes cluster using Kubernetes API.
                    </li>
                    <li className="mb-1">
                      Designed the architecture of the application. It is
                      composed of three Docker container(One deployment consists
                      of three pods inside Kubernetes cluster):
                      <ul className="list-inside list-disc font-extralight text-sm ml-4">
                        <li className="mb-1">
                          API server(Express): expose REST APIs to provide
                          refined data from k8s using k8s’ APIs.
                        </li>
                        <li className="mb-1">
                          Web server(Express): a server that provides a React
                          application to users.
                        </li>
                        <li>
                          Proxy Server(NGINX): a reverse proxy server dedicated
                          to the application server and API server to follow
                          Same-Origin policy.
                        </li>
                        <li>Front-end application(React)</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* OWO */}
            <div className="mb-6">
              <div className="text-l font-extrabold text-blue-300 mb-2">
                OWO
              </div>
              <Divider />
              <div className="mb-4">
                <div className="text-base font-semibold mb-1">
                  Team: Service Development
                </div>
                <div className="text-sm font-normal text-gray-500 mb-1">
                  🧑🏻‍💻Web Front-end API developer
                </div>
                <div className="text-sm font-normal text-gray-500 mb-2">
                  🗓2017.06 - 2017.11
                </div>
                <ul className="list-inside list-disc font-extralight text-sm">
                  <li className="mb-1">
                    planned a project called “Workshop please”, a service
                    supporting office workers to go for workshops
                    colleagues/co-workers easily.
                  </li>
                  <li className="mb-1">
                    developed web page(using just Vanilla Javascript) for the
                    project.
                  </li>
                  <li className="mb-1">
                    resolved issues between design and development team.
                  </li>
                </ul>
              </div>
            </div>

            {/* SK C&C */}
            <div className="mb-6">
              <div className="text-l font-extrabold text-red-600 mb-2">
                SK C&C
              </div>
              <Divider />
              <div className="mb-4">
                <div className="text-sm font-normal text-gray-500 mb-1">
                  🧑🏻‍💻PaaS Engineer(Intern)
                </div>
                <div className="text-sm font-normal text-gray-500 mb-2">
                  🗓2016.07 - 2016.08
                </div>
                <ul className="list-inside list-disc font-extralight text-sm">
                  <li className="mb-1">
                    enhanced service broker of Cloud Foundry.
                  </li>
                  <li className="mb-1">
                    developed a client web application of Redis that manages
                    data stored inside Redis server. It contains a API server
                    that provides Redis functions with REST API.
                  </li>
                </ul>
              </div>
            </div>

            {/* OWO */}
            <div className="mb-6">
              <div className="text-l font-extrabold text-blue-300 mb-2">
                OWO
              </div>
              <Divider />
              <div className="mb-4">
                <div className="text-base font-semibold mb-1">
                  Team: Service Development
                </div>
                <div className="text-sm font-normal text-gray-500 mb-1">
                  🧑🏻‍💻Co-founder & Android dev. & UX Desg.
                </div>
                <div className="text-sm font-normal text-gray-500 mb-2">
                  🗓2014.01 - 2016.01
                </div>
                <ul className="list-inside list-disc font-extralight text-sm">
                  <li className="mb-1">
                    planned a project called “MT please”, a service supporting
                    university students to go for rips with friends/colleagues
                    easily, with CEO.
                  </li>
                  <li className="mb-1">
                    designed UI/UX of an mobile application for the project.
                  </li>
                  <li className="mb-1">
                    developed the mobile Android application which communicates
                    with REST API server(back-end).
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div id="Education" className="shadow rounded-md p-4 mt-4">
            <div className="text-l font-bold text-yellow-500 mb-2">
              Education 🎓
            </div>
            <div className="text-base mb-2">
              <div className="text-green-500 font-semibold">
                SungKyunKwan University
              </div>
              <div className="font-light">
                Bachelor of Computer Science and Engineering, 2017.02
              </div>
            </div>
            <div className="text-base">
              <div className="text-red-600 font-semibold">
                Queen's University Belfast
              </div>
              <div className="font-light">
                Computer Science, Exchange student, 2013.09-2014.01
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* <footer></footer> */}
    </div>
  );
}

import { appState } from "~/state/app-state";
import { Module1PathI } from "~/types";
import { assets } from "../assets";

export const module1OmarPathContent: Module1PathI = {
  scenario1: {
    section1: {
      sectionTitle: "Introduction",
      content: (
        <div>
          <p>
            Omar Davis is 41 and lives in Los Angeles, California, with his wife, Danielle, and their two children. He works full-time at a local grocery store and picks up occasional evening shifts at a neighborhood sandwich shop to help support his family.
          </p>
          <br />
          <p>
            Together, they bring in around $188,300 annually, just enough to scrape by in L.A., where rent, groceries, and gas seem to go up every month. They have always dreamed of owning a home but in a city where starter homes often start near seven figures, it feels like a distant goal. Luckily, Omar’s Uncle Louie is willing to help by giving a gift for downpayment and/or closing costs, offering a bit of hope for the future.
          </p>
        </div>
      ),
      video: assets.omarIntroVideo,
      image: assets.marisolIntroBg4,
    },
    section2: {
      sectionTitle: "",
      content: (
        <h1>
          <span>Internet Access and Education</span>
        </h1>
      ),
      image: assets.omarScenario1Bg1,
    },
    section3: {
      sectionTitle: "Internet Access and Education",
      content: (
        <>
          <h2>
            <span>8am</span> <span>Omar's morning</span>
          </h2>
        </>
      ),
      image: assets.omarScenario1Bg2,
    },
    section4: {
      sectionTitle: "Internet Access and Education",
      content: {
        title: <h3 className="headingTitleSmall">Let's place yourself in Omar's shoes...</h3>,
        description: (
          <>
            <p>
              You drop your two children, Jalen and Mia off at their public school, where{" "}
              <span className="visual-break" /> digital tools are essential for their learning.
            </p>
            <p>
              Their school provides loaner laptops to ensure every child has access to online{" "}
              <span className="visual-break" /> assignments.
            </p>
          </>
        ),
      },
    },
    section5: {
      sectionTitle: "Internet Access and Education",
      content: (
        <>
          <h2>
            <span>2pm</span> <span>Early afternoon</span>
          </h2>
        </>
      ),
      image: assets.omarScenario1Bg3,
    },
    section6: {
      sectionTitle: "Internet Access and Education",
      content: [
        <>
          <p>
            After school, Jalen and Mia sit down to complete <span className="visual-break" /> their homework on the
            school’s online learning <span className="visual-break" /> platform.
          </p>
          <p>
            As they try to log in, the connection keeps dropping,
            <span className="visual-break" /> and videos take forever to load,{" "}
            <strong>
              turning a simple <span className="visual-break" /> assignment into a frustrating ordeal
            </strong>
            .
          </p>
        </>,
      ],
      image: assets.omarScenario1Bg4,
    },
    section7: {
      sectionTitle: "Internet Access and Education",
      content: (
        <>
          <h2>
            <span>5pm</span> <span>Dinner time</span>
          </h2>
        </>
      ),
      image: assets.scenario1Bg5,
    },
    section8: {
      sectionTitle: "Internet Access and Education",
      content: [
        <>
          <p>
            You watch as your children struggle with their <span className="visual-break" /> homework, unable to access
            the same fast, reliable <span className="visual-break" /> internet that wealthier families take for granted.
          </p>
          <p>
            You know they deserve better, but in your <span className="visual-break" /> neighborhood, high-speed
            internet remains out of <span className="visual-break" /> reach.
          </p>
          <p>
            <strong>
              “I want Jalen and Mia to be able to do their <span className="visual-break" /> homework for tomorrow,
              what can I do to help <span className="visual-break" /> them?”
            </strong>
          </p>
          <p className="headingTitleMedium">What will you do?</p>
        </>,
      ],
      image: assets.omarScenario1Bg6,
    },
    section9: {
      content: {
        question: "What will you do?",
        description: "Select one option:",
        options: [
          {
            title: (
              <p className="option-title">
                “If there’s a way to improve the connection, I have to try. Maybe there’s a faster option they haven’t
                told me about?”
              </p>
            ),
            description: (
              <p>
                You decide to call your internet provider to see if there’s anything they can do to improve your
                service.
              </p>
            ),
            btnText: "Call the provider",
            onClick: () => {
              appState.getState().updateBookmark({ decision1Answer: { answer: 1, hideQuestion: false } });
              setTimeout(() => {
                appState.getState().updateBookmark({ decision1Answer: { answer: 1, hideQuestion: true } });
              }, 2000);
            },
          },
          {
            title: <p><strong>“Maybe Jessica can help. She’s mentioned how fast her internet is...”</strong></p>,
            description: (
              <p>
                You decide to call your friend, Jessica, who lives in a wealthier neighborhood. She tells you her kids
                have no issues with remote learning because her area has high-speed fiber internet and invites you to
                bring Mateo and Sofia over to her house.
              </p>
            ),
            btnText: "Go to Jessica",
            onClick: () => {
              appState.getState().updateBookmark({ decision1Answer: { answer: 2, hideQuestion: false } });
              setTimeout(() => {
                appState.getState().updateBookmark({ decision1Answer: { answer: 2, hideQuestion: true } });
              }, 2000);
            },
          },
        ],
      },
    },
    section10: {
      image: assets.omarScenario1Bg8,
      option1content: [
        <>
          <h2 className="headingTitleMedium">Result</h2>
          <p>Your internet provider tells you:</p>
          <p>
            <strong>“Sorry, that’s the fastest speed available in your area…”</strong>
          </p>
          <p>
            They said "my area" I wonder about other areas...
          </p>
          <p>
            You decide to check the provider’s website and enter <span className="visual-break" /> an address in a wealthier, predominantly
            white <span className="visual-break" /> neighborhood just a few miles away.
          </p>
          <p>
            To your surprise, the website shows that high-speed <span className="visual-break" /> fiber internet is
            available here, yet your internet has <span className="visual-break" /> slower speeds.
          </p>
          <p>
            A reliable internet connection is essential for you and <span className="visual-break" /> your children to help with
            their schoolwork, but not <span className="visual-break" /> everyone has equal access to this.
          </p>
        </>,
      ],
      option2content: [
        <>
          <h2 className="headingTitleMedium">Result</h2>
          <p>
            Later that evening, back at home, you decide to check <span className="visual-break" /> the provider’s
            website and enter an address in a <span className="visual-break" />
            wealthier, predominantly white neighborhood just a <span className="visual-break" /> few miles away.
          </p>
          <p>
            To your surprise, the website shows that high-speed <span className="visual-break" /> fiber internet is
            available here, yet your internet has <span className="visual-break" /> slower speeds.
          </p>
          <p>
            A reliable internet connection is essential for you and <span className="visual-break" /> your children to help with
            their schoolwork, but not <span className="visual-break" /> everyone has equal access to this.
          </p>
        </>,
      ],
    },
    section11: {
      image: assets.marisolScenario1Bg9,
      video: assets.omarScenario1CrossingVideo,
      content1: [
        <>
          <h2 className="bot-1 headingTitleMedium">Reflect & Learn</h2>
          <ul>
            <li>
              Omar’s neighborhood has been digitally redlined, <span className="visual-break" /> meaning internet
              providers have historically <span className="visual-break" /> neglected to upgrade infrastructure in
              lower- <span className="visual-break" />
              income and minority communities.
            </li>
            <li>
              Instead of installing high-speed fiber internet, they <span className="visual-break" /> keep old, slower
              networks in place, leading to <span className="visual-break" /> limited-service options compared to
              wealthier <span className="visual-break" /> areas.
            </li>
          </ul>
        </>,
        <ul>
          <li>
            Why? Because companies base their decisions on <span className="visual-break" /> expected profits. If a
            provider thinks an area won’t <span className="visual-break" /> bring in enough revenue, due to perceived
            lower <span className="visual-break" /> demand or affordability, they may skip it{" "}
            <span className="visual-break" /> altogether.
          </li>
          <li>
            Because Omar’s community faces reduced <span className="visual-break" /> access to high-speed internet,
            it could limit <span className="visual-break" /> opportunities for education, employment, and{" "}
            <span className="visual-break" /> healthcare services. This creates a digital divide.
          </li>
        </ul>,
      ],
      content2: [
        <>
          <div className="headingTitleMedium">Let's reflect...</div>
          <div>
            <p>
              How did it feel to realize that families in wealthier areas have access to better internet while your
              community does not?
            </p>
          </div>
        </>,
        <>
          <div>&nbsp;</div>
          <div>
            <p>
              How would this situation impact your daily life, if Jalen and Mia consistently experienced unreliable
              internet? How might this affect their education and career options in the future?
            </p>
          </div>
        </>,
        <>
          <div>&nbsp;</div>
          <div>
            <p>
              And beyond their education, what other areas of your life could be impacted by digital redlining? What
              about your job search, healthcare, banking?
            </p>
          </div>
        </>,
      ]
    },
    section12: {
      image: '',
      content: []
    }
  },
  scenario2: {
    section1: {
      sectionTitle: "",
      content: (
        <h1>
          <span>Omar receives a mortgage <span className="visual-break" />marketing flyer in the mail</span>
        </h1>
      ),
      image: assets.scenario2Bg1,
    },
    section2: {
      sectionTitle: "Omar Receives a Mortgage Flyer",
      content: (
        <>
          <h2>
            <span>6pm</span> <span>Late afternoon</span>
          </h2>
        </>
      ),
      image: assets.omarScenario2Bg2,
    },
    section3: {
      sectionTitle: "Omar Receives a Mortgage Flyer",
      content: {
        title: (
          <p>
            You and Danielle sit at the kitchen table, sorting <span className="visual-break" />
            through the day’s mail while Jalen and Mia are in the <span className="visual-break" />
            living room doing their homework. While flipping <span className="visual-break" />
            through a few bills and grocery store coupons, your <span className="visual-break" />
            eyes suddenly land on a shiny, glossy flyer from <span className="visual-break" />
            the bank:
          </p>
        ),
        description: (
          <p className="headingTitleSmall">“Do You Qualify for a Mortgage? Stop Renting & Own Your Dream Home!”</p>
        ),
      },
    },
    section4: {
      sectionTitle: "Omar Receives a Mortgage Flyer",
      content: [
        <>
          <p>
            You both stare at it for a moment. Owning a home has <span className="visual-break" />
            always been your dream, a place where the kids would <span className="visual-break" />
            have stability, space, and no more landlords sending <span className="visual-break" />
            messages about rent increases.
          </p>
          <p>No more worrying about being forced to move...</p>
          <p>
            Just last month, your friend Alex, someone whose <span className="visual-break" /> situation never looked
            all that different from yours, <span className="visual-break" /> got the keys to his own place.
          </p>
          <p className="headingTitleMedium">What will you do?</p>
        </>,
      ],
      image: assets.omarScenario2Bg3,
    },
    section5: {
      content: {
        question: "What will you do?",
        description: "Select one option:",
        options: [
          {
            title: (
              <p className="option-title">
                “I hate wasting money on rent, it just disappears, and a mortgage would mean we’re investing in our
                family’s future. But... with my job situation right now, would they even consider me?”
              </p>
            ),
            description: (
              <p>I should call Uncle Louie. He once mentioned he could potentially help with my downpayment?</p>
            ),
            btnText: "Ask family for help",
            onClick: () => {
              appState.getState().updateBookmark({ decision2Answer: { answer: 1, hideQuestion: false } });
              setTimeout(() => {
                appState.getState().updateBookmark({ decision2Answer: { answer: 1, hideQuestion: true } });
              }, 2000);
            },
          },
          {
            title: (
              <p className="option-title">
                “Owning a home could be my way out of this rent trap, but we need to be smart about it. I think I should
                seek advice from the bank...”
              </p>
            ),
            btnText: "Get financial advice",
            onClick: () => {
              appState.getState().updateBookmark({ decision2Answer: { answer: 2, hideQuestion: false } });
              setTimeout(() => {
                appState.getState().updateBookmark({ decision2Answer: { answer: 2, hideQuestion: true } });
              }, 2000);
            },
          },
        ],
      },
    },
    section6: {
      option1Img: assets.omarScenario2Bg5a,
      option2Img: assets.omarScenario2Bg5b,
      option1content: [
        <>
          <div className="headingTitleMedium">Result</div>
          <p>You decide to take a leap! You reach out to a family member <span className="visual-break" />
            for help to see what they can provide.</p>
          <p>
            <strong>This flyer has reignited your dream. One way or another, <span className="visual-break" />
              you're determined to get there.</strong>
          </p>
        </>,
      ],
      option2content: [
        <>
          <div className="headingTitleMedium">Result</div>
          <p>You seriously consider homeownership, seeking advice from <span className="visual-break" />
            a professional.</p>
          <p>
            <strong>This flyer has reignited your dream. One way or another, <span className="visual-break" />
              you're determined to get there.</strong>
          </p>
        </>,
      ],
    },
    section7: {
      sectionTitle: "Reflections",
      content: [
        <>
          <div className="headingTitleMedium">
            What does 'Home' <span className="visual-break" /> mean to you?
          </div>
          <p>
            Research from Fannie Mae says more{" "}
            <strong>
              people today <span className="visual-break" /> (44%) say their home means more to them than it{" "}
              <span className="visual-break" /> did a few years ago.
            </strong>
          </p>
          <p>
            As housing has become increasingly unaffordable <span className="visual-break" /> in recent years due to
            higher home prices, mortgage <span className="visual-break" /> rates, and rents, this sentiment could
            reflect the fact <span className="visual-break" /> that many consumers might not have been able to{" "}
            <span className="visual-break" /> afford their current home in today's market.
          </p>
        </>,
      ],
      image: assets.scenario2ReflectionImg1,
    },
    section8: {
      sectionTitle: "Reflections",
      content: [
        <>
          <p>
            One of the top reasons homes have taken on greater <span className="visual-break" /> meaning lately? A sense
            of security.
          </p>
          <p>
            <strong>
              61% of homeowners state that the emotional <span className="visual-break" />
              safety net of owning a home is more important <span className="visual-break" />
              than ever. Omar shares this sentiment.
            </strong>
          </p>
        </>,
      ],
      image: assets.scenario2ReflectionImg2,
    },
    section9: {
      sectionTitle: "Reflections",
      content: [
        <>
          <p>
            But it’s not just about safety. People also want homes <span className="visual-break" /> that fit their
            lives. Think outdoor spaces to breathe, <span className="visual-break" /> rooms for hobbies, and yards for
            growing your own <span className="visual-break" /> veggies. Many renters say they'd even pay more to{" "}
            <span className="visual-break" />
            get these things, plus proximity to work, shops,
            <span className="visual-break" /> or family.
          </p>
          <p>
            <strong>
              More people today (46%) are also acknowledging <span className="visual-break" />
              the long-term financial value of homeownership, <span className="visual-break" />a big jump from just 39%
              in 2015 also making <span className="visual-break" />
              renters become more interested in homeownership.
            </strong>
          </p>
          <p>
            <strong>
              Home means something different to everyone, <span className="visual-break" />
              what does it mean to you?
            </strong>
          </p>
        </>,
      ],
      image: assets.scenario2ReflectionImg3,
    },
    section10: {
      sectionTitle: "Omar Receives a Mortgage Flyer",
      content: (
        <>
          <h2>
            <span>7pm</span>
            <span>Evening time</span>
          </h2>
        </>
      ),
      image: assets.omarScenario2Bg9,
    },
    section11: {
      sectionTitle: "Omar Receives a Mortgage Flyer",
      content: {
        description: (
          <>
            <p>
              Later that evening, after putting Jalen and Mia to bed, you’re back at the kitchen table with your
              laptop open. You just have so many questions, you’ve never bought a home before!
            </p>
            <p>
              Would our savings be enough for a down payment? Would the monthly mortgage payments be lower than rent? And what kind of interest rate would I qualify for? I don't even know how banks determine interest rates...
            </p>
          </>
        ),
        title: <p className="headingTitleSmall">You do some research online...</p>,
      },
      columns: 1,
    },
    section12: {
      sectionTitle: "Omar Receives a Mortgage Flyer",
      content: (
        <>
          <p>Interest rates depend on factors such as credit scores, income, and debt.</p>
          <p>You check your credit score online, it’s good, but not perfect. You wonder:</p>
          <p>
            <strong>"Even if we have good credit scores, what kind of interest rate will we be eligible for?"</strong>
          </p>
        </>
      ),
      onClickReveal: () => {
        appState.getState().updateBookmark({ laptopRevealed: true });
        appState.getState().setShowDownArrow(true);
      },
    },
    section13: {
      video: assets.omarScenario2CityVideo,
      content1: [
        <>
          <h2 className="headingTitleMedium">Reflect & Learn</h2>
          <p className="bot-1">Did you know?</p>
          <ul>
            <li>
              Home Mortgage Disclosure Act (HMDA) collects <span className="visual-break" />
              application and approval data from all mortgage <span className="visual-break" />
              providers in the US. Analysis of this data revealed <span className="visual-break" />
              that Latino, Asian/Pacific Islander, and Native <span className="visual-break" />
              American applicants faced higher denial rates <span className="visual-break" />
              than white applicants with comparable financial <span className="visual-break" />
              characteristics. In addition, Black applicants were <span className="visual-break" />
              nearly twice as like likely to be denied <span className="visual-break" />
              conventional mortgages as similarly qualified <span className="visual-break" />
              white applicants.
            </li>
          </ul>
        </>,
        <ul>
          <li>
            Poor or limited credit history is a major barrier for <span className="visual-break" />
            many Latino homebuyers. According to the Urban <span className="visual-break" />
            Institute, Latino borrowers are more likely to have <span className="visual-break" />
            lower credit scores or be <strong>“credit invisible”</strong>, <span className="visual-break" />
            meaning they don’t have enough traditional credit <span className="visual-break" />
            history to generate a credit score. This is often <span className="visual-break" />
            because they are more likely to have had limited <span className="visual-break" />
            interactions with the formal financial system, past <span className="visual-break" />
            exclusionary lending practices, such as rental payment <span className="visual-break" />
            history or a reliance on cash-based financial <span className="visual-break" />
            habits. Even if someone is financially responsible, <span className="visual-break" />
            a lack of credit history can make it harder to <span className="visual-break" />
            qualify for a mortgage under current lending <span className="visual-break" />
            standards.
          </li>
          <li>
            A study by the Joint Center for Housing Studies of <span className="visual-break" />
            Harvard University found that Black homeowners <span className="visual-break" />
            with incomes between $75,000 and $100,000 had <span className="visual-break" />
            <strong>higher median interest rates</strong> compared <span className="visual-break" />
            to white homeowners earning $30,000 or less.
          </li>
        </ul>,
        <>
          <ul>
            <li>
              Research from the JPMorgan Chase Institute <span className="visual-break" />
              shows that Black and Hispanic borrowers often <span className="visual-break" />
              incur <strong>higher closing costs</strong> compared to white <span className="visual-break" />
              borrowers, even after accounting for factors like <span className="visual-break" />
              loan size and credit profiles.
            </li>
          </ul>
          <p>
            <strong>These studies show that some people face unfair <span className="visual-break" />
              treatment when trying to buy a home, just because of <span className="visual-break" />
              their background. This means they might get denied <span className="visual-break" />
              more often or have to pay higher costs, even if they <span className="visual-break" />
              qualify. It is important for lenders to treat everyone <span className="visual-break" />
              fairly so that everyone has the same chance to own a <span className="visual-break" />
              home and build a better future.
            </strong>
          </p>
        </>,
      ],
      content2: [
        <>
          <div className="headingTitleMedium">Let's reflect...</div>
          <div>
            <p>
              How would you feel if you knew you were being charged higher fees or denied a home loan while others with
              the same financial situation received better deals?
            </p>
          </div>
        </>,
      ],
    },
  },
  scenario3: {
    section1: {
      sectionTitle: "",
      content: (
        <h1>
          <span>Call with a Mortgage Consultant</span>
        </h1>
      ),
      image: assets.omarScenario3Bg1,
    },
    section2: {
      sectionTitle: "Call with a Mortgage Consultant",
      content: (
        <>
          <h2>
            <span>2pm</span> <span>Research</span>
          </h2>
        </>
      ),
      image: assets.scenario3Bg2,
    },
    section3: {
      sectionTitle: "Call with a Mortgage Consultant",
      content: {
        title: (
          <p className="headingTitleSmall">
            After receiving the flyer, you <span className="visual-break" />
            talk with Danielle and spend a<span className="visual-break" />
            few evenings researching <span className="visual-break" />
            homeonwership, mortgages, <span className="visual-break" />
            and first-time buyer programs.
          </p>
        ),
        description: (
          <p>
            You know that rent prices keep increasing, and owning <span className="visual-break" />a home could be a
            path to stability for your family.
          </p>
        ),
      },
    },
    section4: {
      sectionTitle: "Call with a Mortgage Consultant",
      firstContent: (
        <>
          Knowing you have some savings and that your uncle <span className="visual-break" />
          Louie has offered a gift for the downpayment and/or <span className="visual-break" />
          closing costs, you feel cautiously hopeful and decide <span className="visual-break" />
          to schedule a virtual meeting with a mortgage <span className="visual-break" />
          consultant at RCR National Bank to discuss your <span className="visual-break" />
          options.
        </>
      ),
      image: assets.omarScenario3Bg3,
      secondContent: (
        <h2>
          <span>3pm</span>
          <span>The call</span>
        </h2>
      ),
    },
    section5: {
      sectionTitle: "Call with a Mortgage Consultant",
      content: (
        <>
          <h2>
            <span>3pm</span>
            <span>The call</span>
          </h2>
        </>
      ),
      image: assets.omarScenario3Bg3,
    },
    section6: {
      sectionTitle: "Call with a Mortgage Consultant",
      content: [
        <>
          <p>
            <strong>
              The mortgage consultant, Richard, joins the video <span className="visual-break" />
              call, barely making eye contact. He looks <span className="visual-break" />
              distracted, typing on his keyboard while you <span className="visual-break" />
              introduce yourself.
            </strong>
          </p>
          <p>
            “Hi, thanks for meeting with me. I wanted to explore <span className="visual-break" />
            mortgage options. My wife and I have been renting <span className="visual-break" />
            for years and really want to buy a home now. I work full-time, we have some savings, plus my uncle is willing to help with some of the costs.”
          </p>
          <p>
            <strong>
              Richard observes Omar and his surroundings <span className="visual-break" />
              before replying...
            </strong>
          </p>
          <p>
            “We have a lot of mortgage options, but they do <span className="visual-break" />
            require significant down payments and an established <span className="visual-break" />
            credit history. Based on your situation, it may be <span className="visual-break" />
            difficult for you to qualify, but I'll send you some <span className="visual-break" />
            information to take a look at and we'll go from there.”
          </p>
          <p className="headingTitleMedium">What will you do?</p>
        </>,
      ],
      image: assets.omarScenario3Bg4,
    },
    section7: {
      content: {
        question: "What will you do?",
        description: "Select one option:",
        options: [
          {
            title: <p className="option-title">You accept defeat - You ask quietly:</p>,
            description: (
              <p>
                “…So, it’s not possible for me?” and stare at the mortgage flyer still sitting on the table. You just
                want to crumple it up and throw it away...”
              </p>
            ),
            btnText: "Accept defeat",
            onClick: () => {
              appState.getState().updateBookmark({ decision3Answer: { answer: 1, hideQuestion: false } });
              setTimeout(() => {
                appState.getState().updateBookmark({ decision3Answer: { answer: 1, hideQuestion: true } });
              }, 2000);
            },
          },
          {
            title: (
              <p className="option-title">
                You decide to push back - Richard hasn't even looked into my details properly.
              </p>
            ),
            description: (
              <>
                <p>
                  “Wait. I haven’t even shared our finances yet. We have some savings, pay the rent on time, and we're
                  researching first-time homebuyer programs. Is there nothing you can do?”...
                </p>
                <p>
                  <strong>but receive a dismissive response from Richard.</strong>
                </p>
              </>
            ),
            btnText: "Push back",
            onClick: () => {
              appState.getState().updateBookmark({ decision3Answer: { answer: 2, hideQuestion: false } });
              setTimeout(() => {
                appState.getState().updateBookmark({ decision3Answer: { answer: 2, hideQuestion: true } });
              }, 2000);
            },
          },
        ],
      },
    },
    section8: {
      option1content: [
        <div>
          Let's now <strong>jump into the shoes of Richard,</strong> and look at his perspective...
        </div>,
        <>
          <p>Omar looks defeated...</p>
          <p>
            <strong>“…So, it’s not possible for us?”</strong>
          </p>
          <p>He stares at the mortgage flyer still sitting on the table.</p>
          <p>
            <strong>How do you respond?</strong>
          </p>
        </>,
      ],
      option2content: [
        <div>
          Let’s now <strong>jump into the shoes of Richard,</strong> and look at his perspective...
        </div>,
        <>
          <p>Omar is determined:</p>
          <p>
            <strong>“Wait. You haven’t even looked at my finances yet...”</strong>
          </p>
          <p>
            <strong>How do you respond?</strong>
          </p>
        </>,
      ],
    },
    section9: {
      sectionTitle: "Your decisions",
      content: [
        <>
          <p>
            Select each option to see how discouraging <span className="visual-break" />
            responses can impact someone’s journey toward <span className="visual-break" />
            owning a home. Each response shows what can go <span className="visual-break" />
            wrong when we let stereotypes or a lack of <span className="visual-break" />
            information get in the way of fair treatment and <span className="visual-break" />
            opportunities.
          </p>
          <p>
            Only after exploring all the options will you be able to <span className="visual-break" />
            move forward.
          </p>
          <p>
            <strong>Let's see the impact when it's not done right.</strong>
          </p>
        </>,
      ],
      image: assets.scenario3Bg6,
    },
    section10: {
      sectionTitle: "Your decisions",
      content: {
        question: "Let's see the impact when it's not done right",
        description: "Select the circular arrow icon to flip the cards. Please select each card before continuing:",
        cards: [
          {
            frontContent: (
              <>
                <p>
                  <strong>Response:</strong>
                </p>
                <p>
                  “The mortgage process is very complex with many eligibility requirements, we may start the process but
                  based on what you've shared, it might be hard for you to meet those requirements.
                </p>
              </>
            ),
            backContent: (
              <>
                <p>
                  <strong>Result:</strong>
                </p>
                <p>
                  Richard is making assumptions about their eligibility without exploring options, effectively
                  preemptively dismissing their application.
                </p>
              </>
            ),
          },
          {
            frontContent: (
              <>
                <p>
                  <strong>Response:</strong>
                </p>
                <p>
                  “I mean, technically, you may try applying, but realistically, I don’t think you’d be approved. I
                  understand that this is frustrating, but at this time, I don’t see a way forward for you. Maybe focus
                  on building more savings first.”
                </p>
              </>
            ),
            backContent: (
              <>
                <p>
                  <strong>Result:</strong>
                </p>
                <p>
                  Richard is discouraging Omar from applying without giving practical solutions or informing him
                  about our affordable lending solutions and/or partnerships.
                </p>
              </>
            ),
          },
          {
            frontContent: (
              <>
                <p>
                  <strong>Response:</strong>
                </p>
                <p>
                  “Well… there might be an option. Based on your income history and current employment status, you
                  wouldn’t qualify for our standard mortgage rates, but it can be possible if you accept a higher
                  interest rate and extra fees.”
                </p>
              </>
            ),
            backContent: (
              <>
                <p>
                  <strong>Result:</strong>
                </p>
                <p>Richard is pushing Omar to take a more expensive loan option.</p>
              </>
            ),
          },
        ],
      },
      onCompleteFn: () => {
        appState.getState().updateBookmark({ flipCards1Completed: true });
        appState.getState().setShowDownArrow(true);
      },
    },
    section11: {
      video: assets.omarScenario3DowntownVideo,
      content1: [
        <>
          <div className="headingTitleMedium">Let's reflect...</div>
          <div>
            <p>What impact does this type of discouragement have on homebuyers, based on stereotypes and assumptions?</p>
          </div>
        </>,
        <>
          <div className="headingTitleMedium">Let's reflect...</div>
          <div>
            <p>
              Take a moment to consider how Omar might be feeling. What resources or people could help him see that he
              and his family still has options?
            </p>
          </div>
        </>,
      ],
      content2: [
        <>
          <p className="headingTitleMedium">Reflect & Learn</p>
          <ul>
            <li>
              Omar is not being given a fair opportunity to <span className="visual-break" />
              purchase a home.
            </li>

            <li>
              Richard failed Omar, not because he wasn’t <span className="visual-break" />
              qualified, but because of his own stereotypes and <span className="visual-break" />
              assumptions.
            </li>

            <li>
              Richard dismissed Omar too quickly based on a <span className="visual-break" />
              first impression, leading to assumptions about his <span className="visual-break" />
              qualifications. This left him feeling dismissed <span className="visual-break" />
              and inferior.
            </li>
          </ul>
          <p>
            Instead of helping to support his dream of <span className="visual-break" />
            homeownership...
          </p>
          <p>
            <strong>He turned him away.</strong>
          </p>
        </>,
        <>
          <p>What should Richard have done in this scenario?</p>
          <ul>
            <li>
              <strong>Fair Treatment for All:</strong> Our responsibility is to <span className="visual-break" />
              help support people achieve homeownership, not <span className="visual-break" />
              discourage or turn them away. Every potential <span className="visual-break" />
              homebuyer should be given the same <span className="visual-break" />
              opportunities regardless of background.
            </li>
            <li>
              <strong>Finding the Right Solution:</strong> Richard should have <span className="visual-break" />
              considered the range of available solutions and <span className="visual-break" />
              instead of dismissing Omar, taken the time to <span className="visual-break" />
              explore solutions that fit his family's needs.
            </li>
            <li>
              <strong>
                Access to Homeownership Assistance <span className="visual-break" />
                Programs:
              </strong>{" "}
              The journey to homeownership is a <span className="visual-break" />
              complex one, and there are many programs to <span className="visual-break" />
              help, for example first-time homebuyer programs <span className="visual-break" />
              and mortgage counseling services. Richard should <span className="visual-break" />
              have connected Omar with those resources.
            </li>
          </ul>
        </>,
        <ul>
          <li>
            <strong>
              Affordable lending products and Down <span className="visual-break" />
              Payment Assistance Grants:
            </strong>{" "}
            Low down-payment <span className="visual-break" />
            mortgage options are often designed for, but not <span className="visual-break" />
            limited to, first-time homebuyers. This may be <span className="visual-break" />
            combined with eligible grants to help pay for costs <span className="visual-break" />
            associated with obtaining a mortgage.
          </li>
          <li>
            Housing and Urban Development training through <span className="visual-break" />
            non-profit partnerships.
          </li>
          <li>Home buyer education counseling courses.</li>
          <li>
            Nonprofit and federal agencies offering affordable <span className="visual-break" />
            housing programs.
          </li>
        </ul>,
      ],
    },
    section12: {
      contents: {
        fixedText: <h2 className="headingTitleSmall">Did you know?</h2>,
        content: [
          <>
            <p>
              According to a study by the Urban Institute, children <span className="visual-break" />
              whose parents are homeowners are over 40% more <span className="visual-break" />
              likely to become homeowners themselves compared <span className="visual-break" />
              to those whose parents rent.
            </p>

            <p>
              This highlights how{" "}
              <strong>
                homeownership creates lasting <span className="visual-break" />intergenerational benefits
              </strong>
              , and why equal access to <span className="visual-break" />
              mortgages today plays a key role in reducing racial <span className="visual-break" />
              wealth gaps and expanding opportunity for future <span className="visual-break" />
              generations.
            </p>
          </>,
          <p>
            A study published in the <i>Journal of Happiness Studies</i> <span className="visual-break" />
            found that <strong>life satisfaction begins to increase</strong> in the <span className="visual-break" />
            year leading up to homeownership, peaks at the time <span className="visual-break" />
            of purchase, and remains elevated for several years <span className="visual-break" />
            thereafter.
          </p>,
        ],
      },
    },
    section13: {
      content: {
        question: "What policies are in place as of today?",
        description: "Select the circular arrow icon to flip the cards. Please select each card before continuing:",
        cards: [
          {
            frontContent: (
              <p className="headingTitleSmall">
                <strong>
                  The Fair Housing Act
                  <br />
                  (FHA)
                </strong>
              </p>
            ),
            backContent: (
              <p>
                The Fair Housing Act prohibits discrimination based on disability, race, color, national origin,
                religion, sex and familial status when a person is buying, renting, or securing finances for a home.
              </p>
            ),
          },
          {
            frontContent: (
              <p className="headingTitleSmall">
                <strong>
                  The Home Mortgage Disclosure Act
                  <br />
                  (HMDA)
                </strong>
              </p>
            ),
            backContent: (
              <p>The Home Mortgage Disclosure Act requires mortgage lenders to collect and report demographic data to ensure transparency.</p>
            ),
          },
          {
            frontContent: (
              <p className="headingTitleSmall">
                <strong>
                  The Equal Credit Opportunity Act
                  <br />
                  (ECOA)
                </strong>
              </p>
            ),
            backContent: <p>The Equal Credit Opportunity Act protects consumers from credit discrimination.</p>,
          },
          {
            frontContent: (
              <p className="headingTitleSmall">
                <strong>
                  Unfair, Deceptive, or Abusive Acts and Practices
                  <br />
                  (UDAAP)
                </strong>
              </p>
            ),
            backContent: (
              <p>
                The Unfair, Deceptive and Abusive Acts or Practices policy protects consumers from practices that are considered{" "}
                <strong>unfair, deceptive, or abusive</strong>, such as misleading information, hidden fees, or
                exploiting consumer vulnerabilities, and prevents predatory lending.
              </p>
            ),
          },
        ],
      },
      onCompleteFn: () => {
        appState.getState().updateBookmark({ flipCards2Completed: true });
        appState.getState().setShowDownArrow(true);
      },
    },
    section14: {
      sectionTitle: "Key Policies",
      content: {
        description: (
          <p>
            In part 2 of this module, we’ll go beyond the policies and products to <span className="visual-break" />
            explore the important role you play in putting these protections into action.{" "}
            <span className="visual-break" />
            And look at how by guiding everyone toward a solution that fits their needs,{" "}
            <span className="visual-break" />
            <strong>we can make a real difference.</strong>
          </p>
        ),
      },
      columns: 1,
    },
  },
  scenario4: {
    section1: {
      sectionTitle: "",
      content: (
        <h1>
          The Role We All Play, <span className="visual-break" />
          When We Don’t Get It Right
        </h1>
      ),
      video: assets.scenario4CallVideo,
    },
    section2: {
      sectionTitle: "The Role We All Play, When We Don’t Get It Right",
      content: {
        title: (
          <p className="headingTitleSmall">
            It isn't just about what happens <span className="visual-break" />
            during the mortgage application. It <span className="visual-break" />
            begins with the very first <span className="visual-break" />
            interaction with us, whether that <span className="visual-break" />
            is in person, on video, by phone or <span className="visual-break" />
            by chat.
          </p>
        ),
        description: (
          <p>
            Every one of us has a responsibility to listen, support, <span className="visual-break" />
            and connect individuals to the right solutions. When <span className="visual-break" />
            we make assumptions, that doesn't happen and <span className="visual-break" />
            people like Omar aren't given fair access to <span className="visual-break" />
            opportunities.
          </p>
        ),
      },
    },
    section3: {
      sectionTitle: "The Role We All Play, When We Don’t Get It Right",
      content: [
        <>
          Let’s step into the shoes of Lisa, a Relationship <span className="visual-break" />
          Manager at RCR National Bank and explore a <span className="visual-break" />
          scenario that shows the impact of what happens <span className="visual-break" />
          when we don't get it right.
        </>,
      ],
      image: assets.scenario4Bg1,
    },
    section4: {
      sectionTitle: "The Role We All Play, When We Don’t Get It Right",
      content: (
        <>
          <h2>
            <span>2pm</span>
            <span>
              A client walks into <span className="visual-break" />
              the branch
            </span>
          </h2>
        </>
      ),
      image: assets.omarScenario4Bg2,
    },
    section5: {
      sectionTitle: "The Role We All Play, When We Don’t Get It Right",
      content: [
        <>
          <p>
            <strong>They say to the RM:</strong>
          </p>
          <p>
            “Hi, I've done some research on ways to plan for my <span className="visual-break" />
            family's future. I’ve been renting for years and I’m <span className="visual-break" />
            maybe thinking about buying. I’ve been saving what I <span className="visual-break" />
            can for a while now but I’m not sure if it’s enough for <span className="visual-break" />
            me to qualify for a mortgage yet. Could you tell me <span className="visual-break" />
            where to start?”
          </p>
          <p>
            <strong>
              How does Lisa respond? Let's see the impact <span className="visual-break" />
              when it's not done right.
            </strong>
          </p>
        </>,
      ],
      image: assets.omarScenario4Bg3,
    },
    section6: {
      content: {
        question: "Let's see the impact when it's not done right",
        description: "Select one option to start. You can revist the others after:",
        options: [
          {
            title: <p className="option-title">“Financially Established Clients:“</p>,
            description: (
              <p>
                “We have minimum deposit balance requirements to establish a relationship with us. I can review those
                with you if you'd like.”
              </p>
            ),
          },
          {
            title: <p className="option-title">Website Has the Info:</p>,
            description: <p>“Let me share with you a link to our website where you can find a lot of information.”</p>,
          },
          {
            title: <p className="option-title">Renting Might Be Smarter Right Now:</p>,
            description: (
              <p>
                “It does take a lot of resources these days to buy a home. In this current market, if you don’t have
                family support or a big deposit saved up, it might be better to keep renting for now."
              </p>
            ),
          },
        ],
      },
      onSubmit: (answer: number) => {
        const { decision5Answer } = appState.getState().bookmark;
        if (answer === 1) {
          const updatedAnswer = {
            ...decision5Answer,
            option1: answer,
            lastAnswer: answer,
          };
          return appState.getState().updateBookmark({ decision5Answer: updatedAnswer });
        }
        if (answer === 2) {
          const updatedAnswer = {
            ...decision5Answer,
            option2: answer,
            lastAnswer: answer,
          };
          return appState.getState().updateBookmark({ decision5Answer: updatedAnswer });
        }
        if (answer === 3) {
          const updatedAnswer = {
            ...decision5Answer,
            option3: answer,
            lastAnswer: answer,
          };
          return appState.getState().updateBookmark({ decision5Answer: updatedAnswer });
        }
      },
    },
    section7: {
      optionImg: assets.omarScenario4Bg5,
      option1content: [
        <>
          <h2 className="headingTitleMedium">Result</h2>
          <p>
            Lisa discouraged a motivated first-time homebuyer <span className="visual-break" />
            without exploring their full background. Your role may not <span className="visual-break" />
            directly offer mortgage advice, but you may be <span className="visual-break" />
            their first point of contact.
          </p>
          <p>
            <strong>
              When any individual expresses a need for home <span className="visual-break" />
              financing it's important to get them to one of our <span className="visual-break" />
              mortgage consultants.
            </strong>
          </p>
        </>,
      ],
      option2content: [
        <>
          <h2 className="headingTitleMedium">Result</h2>
          <p>
            Lisa turned away someone who asked for help and <span className="visual-break" />
            offered no clear next steps.
          </p>
          <p>
            <strong>
              It’s not about having all the answers, it’s about <span className="visual-break" />
              being willing to connect the individual to <span className="visual-break" />
              someone who does.
            </strong>
          </p>
        </>,
      ],
      option3content: [
        <>
          <h2 className="headingTitleMedium">Result</h2>
          <p>
            Lisa assumed the individual was not a serious or <span className="visual-break" />
            viable applicant based on assumptions she made <span className="visual-break" />
            about the individual's financial situation. This <span className="visual-break" />
            discourages individuals who are just starting out or <span className="visual-break" />
            don't appear to fit a certain profile.
          </p>
          <p>
            <strong>
              This approach directly undermines Fair Lending <span className="visual-break" />
              principles, which are designed to give all <span className="visual-break" />
              individuals the opportunity to own a home, <span className="visual-break" />
              regardless of background.
            </strong>
          </p>
        </>,
      ],
    },
    section8: {
      sectionTitle: "Reflect and learn",
      content: [
        <>
          <h2 className="headingTitleMedium">Reflect & Learn</h2>
          <p>
            We’ve just explored what getting it wrong looks like <span className="visual-break" />
            with RCR National Bank.
          </p>

          <p>
            But that’s not the way we do things at HSBC, and you <span className="visual-break" />
            know that already.
          </p>

          <p>
            <strong>Remember...</strong>
          </p>

          <p>
            You may be the first person an individual speaks to <span className="visual-break" />
            when they begin thinking about homeownership, and <span className="visual-break" />
            those early conversations have a significant impact. <span className="visual-break" />
            Even if you're not the one who will guide them <span className="visual-break" />
            through the home lending journey.
          </p>
          <p>How you listen, respond and refer can either <span className="visual-break" />
            open a door, or quietly close it.
          </p>
        </>,
        <>
          <p>
            It's important for us be mindful of potential <span className="visual-break" />
            unconscious stereotypes so that we can <strong>avoid <span className="visual-break" />
              making assumptions based on first impressions.</strong>
          </p>
          <p>
            If you assume an individual is not ready because you <span className="visual-break" />
            doubt they have a strong credit score or sufficient <span className="visual-break" />
            assets, you risk discouraging someone for whom <span className="visual-break" />
            homeownership could be possible. In addition, it is <span className="visual-break" />
            our responsibility as a financial institution, to make <span className="visual-break" />
            lending opportunities available to all potential <span className="visual-break" />
            borrowers.
          </p>

          <p>
            When faced with a similar situation, connect the <span className="visual-break" />
            individual with a mortgage consultant who can help.
          </p>

          <p>
            <strong>How you handle that moment makes all the difference.</strong>
          </p>
        </>,
      ],
      video: assets.scenario4CallVideo,
    },
    section9: {
      sectionTitle: "Conclusion",
      //   <>
      //     <h2 className="headingTitleSmall">Coming in part two</h2>
      //     <p>
      //       Marisol is currently discouraged and doesn't think a <span className="visual-break" />
      //       home is possible. The tides turn for Marisol when she <span className="visual-break" />
      //       comes to HSBC and how her life is changed for the <span className="visual-break" />
      //       better.
      //     </p>
      //   </>,
      //   <>
      //     <h2 className="headingTitleSmall">Thank you for completing this module.</h2>
      //     <p>
      //       Before you go, make sure to download your
      //       <span className="visual-break" />
      //       <strong>Reflective PDF: Part 1 — Building Behaviours.</strong>
      //     </p>
      //     <p>
      //       Once downloaded, you’ll be able to mark this module as complete.
      //       <span className="visual-break" />
      //       <button className="download">Download PDF</button>
      //     </p>

      //     <p>
      //       Select <strong>Complete module</strong> to finish and exit.
      //       <span className="visual-break" />
      //       <button>Complete module</button>
      //     </p>
      //   </>,
      // ],
      contentWithDownload: (onDownload, hasDownloaded) => [
        <>
          <h2 className="headingTitleSmall">Coming in part two</h2>
          <p>
            Omar is currently discouraged and doesn't think a <span className="visual-break" />
            home is possible. The tides turn for Omar and Danielle <span className="visual-break" />
            when they come to HSBC and how their life is <span className="visual-break" />
            changed for the better.
          </p>
        </>,
        <>
          <h2 className="headingTitleSmall">Thank you for completing <span className="visual-break" />
            this module.</h2>
          <p>
            Before you go, make sure to download your <br />
            <strong>Reflective PDF: Part 1 — Building Behaviours.</strong>
          </p>

          <p>
            Once downloaded, you’ll be able to mark this module <span className="visual-break" />
            as complete.
            <br />
            <button
              className="download"
              onClick={() => {
                const link = document.createElement("a");
                link.href = assets.module1Scenario4Pdf;
                link.download = "Fair_Lending_HSBC_US_Part1.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                onDownload();
              }}
            >
              Download PDF
            </button>
          </p>

          {hasDownloaded && (
            <p>
              Select <strong>Complete module</strong> to finish and exit.
              <span className="visual-break" />
              <button onClick={() => appState.getState().updateBookmark({ finishScreen: true })}>
                Complete module
              </button>
            </p>
          )}
        </>,
      ],
      image: assets.omarScenario4Bg6,
    },
  },
};

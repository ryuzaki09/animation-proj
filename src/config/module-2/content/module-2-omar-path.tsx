import { appState } from "~/state/app-state";
import {
  Module2MarisolPathContentI,
  Scenario1PathMarisolModule2I,
  Scenario2PathMarisolModule2I,
  Scenario3PathMarisolModule2I,
  Scenario4PathMarisolModule2I,
} from "~/types";
import { assetsModule2 } from "../assets";
import { assets } from "~/config/module-1/assets";

const scenario1PathOmarModule2: Scenario1PathMarisolModule2I = {
  section1: {
    sectionTitle: "Mortgage products",
    content: {
      title: (
        <h2 className="headingTitleSmall">
          So, what homebuyer products do <span className="visual-break" />
          we have?
        </h2>
      ),
    },
  },
  section2: {
    sectionTitle: "Mortgage products",
    content: {
      title: <h2 className="headingTitleSmall">1. HSBC CommunityWorks</h2>,
      description: (
        <>
          <p>
            CommunityWorks is HSBC’s affordable low down- <span className="visual-break" />
            payment mortgage option designed to help make <span className="visual-break" />
            homeownership possible for more people. It is <span className="visual-break" />
            designed for, but not limited to, first-time <span className="visual-break" />
            homebuyers. This program may be combined with <span className="visual-break" />
            eligible grants to help pay for costs associated with <span className="visual-break" />
            obtaining a mortgage.
          </p>
        </>
      ),
    },
  },
  section3: {
    sectionTitle: "Mortgage products",
    content: {
      title: (
        <h2 className="headingTitleSmall heading-number">
          <span className="heading-number-line-break">2. </span>{" "}
          <span className="content-number-line-break">
            Fannie Mae (FNMA) <span className="visual-break" />
            Conventional Fixed and <span className="visual-break" />
            Adjustable-Rate (ARM) <span className="visual-break" />
            products
          </span>
        </h2>
      ),
      description: (
        <>
          <p>
            Conforming fixed or adjustable-rate loans saleable to <span className="visual-break" />
            Fannie Mae. Available for the purchase, limited cash <span className="visual-break" />
            out or cash out refinance of an owner occupied, <span className="visual-break" />
            second home or investment property.
          </p>
        </>
      ),
    },
  },
  section4: {
    sectionTitle: "Mortgage products",
    content: {
      title: (
        <h2 className="headingTitleSmall heading-number">
          <span className="heading-number-line-break">3. </span>
          <span className="content-number-line-break">
            {" "}
            Fannie Mae HomeReady® <span className="visual-break" /> Mortgage
          </span>
        </h2>
      ),
      description: (
        <p>
          HomeReady® requires minimal out of pocket funds <span className="visual-break" />
          which can come from a variety of sources, and <span className="visual-break" />
          considers income from a non-occupant co-borrower <span className="visual-break" />
          or a renter for qualification making it a great option <span className="visual-break" />
          for homebuyers with limited savings.
        </p>
      ),
    },
  },
  section5: {
    sectionTitle: "Mortgage products",
    content: {
      title: <h2 className="headingTitleSmall">4. HSBC Select Mortgage</h2>,
      description: (
        <>
          <p>
            Our Select Mortgage is created for borrowers with no <span className="visual-break" />
            HSBC relationship or combined personal deposit and <span className="visual-break" />
            investment balances less than $25,000.
          </p>
        </>
      ),
    },
  },
  section6: {
    sectionTitle: "Mortgage products",
    content: {
      title: <h2 className="headingTitleSmall">5. HSBC Preferred Mortgage</h2>,
      description: (
        <>
          <p>
            Our Preferred Mortgage is for borrowers with an <span className="visual-break" />
            HSBC relationship. To request a loan amount up to <span className="visual-break" />
            $2M, the borrower must have $25,000 in combined <span className="visual-break" />
            personal deposit and investment balances at HSBC.
          </p>
        </>
      ),
    },
  },
  section7: {
    sectionTitle: "Mortgage products",
    content: {
      title: <h2 className="headingTitleSmall">6. HSBC Deluxe Mortgage</h2>,
      description: (
        <>
          <p>
            Our Deluxe Mortgage is for borrowers with an HSBC <span className="visual-break" />
            relationship. To request a loan amount up to $3M, <span className="visual-break" />
            the borrower must have $75,000 in combined <span className="visual-break" />
            personal deposit and investment balances. A <span className="visual-break" />
            borrower requesting up to $5M must have $200,000 <span className="visual-break" />
            in combined personal deposit and investment balances.
          </p>
        </>
      ),
    },
  },
  section8: {
    sectionTitle: "Mortgage products",
    content: {
      title: <h2 className="headingTitleSmall">7. HSBC Elite Mortgage</h2>,
      description: (
        <>
          <p>
            Our Elite Mortgage is for borrowers with an HSBC <span className="visual-break" />
            relationship combined personal deposit and <span className="visual-break" />
            investment balances of $1,000,000 or more.
          </p>
        </>
      ),
    },
  },
  section9: {
    sectionTitle: "Mortgage products",
    content: {
      title: (
        <h2 className="headingTitleSmall heading-number">
          <span className="heading-number-line-break">8. </span>
          <span className="content-number-line-break">
            HSBC Home Equity Line of <span className="visual-break" />
            Choice
          </span>
        </h2>
      ),
      description: (
        <p>
          Our Home Equity Line of Credit (HELOC) is a flexible, <span className="visual-break" />
          revolving form of credit. It allows someone to borrow <span className="visual-break" />
          against the equity of their home. It allows someone <span className="visual-break" />
          to borrow and repay funds on an as-needed basis during <span className="visual-break" />
          a specified period of time at a fixed or variable rate. <span className="visual-break" />
          It’s an option for turning equity into a source of funds <span className="visual-break" />
          for covering major expenses like home renovations, <span className="visual-break" />
          tuition, debt consolidation, or other major expenses.
        </p>
      ),
    },
  },
  section10: {
    sectionTitle: "Mortgage products",
    content: {
      title: <h2 className="headingTitleSmall">9. HSBC Summit Mortgage</h2>,
      description: (
        <>
          <p>
            A conventional mortgage available with a fixed or <span className="visual-break" />
            adjustable interest rate. This product is designed for <span className="visual-break" />
            HSBC Private Bank customers. It is available for the <span className="visual-break" />
            purchase, limited cash out or cash out refinance of an owner occupied, second home or investment
            <span className="visual-break" />
            property.
          </p>
          <p>
            <strong>In the Interactive PDF Workbook (Part 2) we will <span className="visual-break" />
              take a closer look at the products and how they <span className="visual-break" />
              can be used to find the right fit for each person.
            </strong>
          </p>
        </>
      ),
    },
  },
};

const scenario2PathOmarModule2: Scenario2PathMarisolModule2I = {
  section1: {
    sectionTitle: "",
    content: (
      <h1>
        <span>A few weeks later</span>
      </h1>
    ),
    image: assetsModule2.omarScenario1Bg2,
  },
  section2: {
    sectionTitle: "Finding a Fair Lender",
    content: (
      <h2>
        <span>Searching for a Lender</span>
      </h2>
    ),
    image: assetsModule2.omarScenario1Bg1,
  },
  section3: {
    sectionTitle: "Finding a Fair Lender",
    content: {
      description: (
        <>
          <p>
            A few weeks after your frustrating experience talking to Richard at RCR <span className="visual-break" />
            National Bank, you’re still determined to find a home for you and your <span className="visual-break" />
            children. You’ve done more research and learned from a friend that she had <span className="visual-break" />
            a great experience with HSBC, and you decide to reach out to someone there.
          </p>
          <p>
            <strong>
              Unlike the previous experience, where you felt dismissed and <span className="visual-break" />
              discouraged, this meeting feels different right away.
            </strong>
          </p>
        </>
      ),
    },
    columns: 1,
  },
  section4: {
    sectionTitle: "Call with a Mortgage Consultant",
    content: [
      <>
        <p>
          <strong>
            The call connects, and you’re greeted by Megan, a <span className="visual-break" />
            warm and friendly voice from the HSBC Contact <span className="visual-break" />
            Center.
          </strong>
        </p>
        <p>
          <strong>Omar says:</strong>
        </p>
        <p>“Hi, I am interested in learning more about the home <span className="visual-break" />
          buying process. A friend recommended HSBC, so I thought <span className="visual-break" />
          I’d give you a call.”
        </p>
        <p>
          <strong>Megan replies:</strong>
        </p>
        <p>
          “I am glad you called us, we can certainly help. We <span className="visual-break" />
          have a team of Mortgage Consultants who can better <span className="visual-break" />
          understand your needs and can give you more detail on <span className="visual-break" />
          the process. I’d like to connect you with one of them. <span className="visual-break" />
          How does that sound?”
        </p>

        <p className="headingTitleMedium">How do you respond?</p>
      </>,
    ],
    image: assetsModule2.scenario1Section14Image,
  },
  section5: {
    content: {
      question: "How do you respond?",
      description: "Select one option:",
      options: [
        {
          title: (
            <p>
              <strong>
                “I think I’d like to understand what I could be pre-approved for. That way, I know exactly what my
                budget would be before I look at different programs.”
              </strong>
            </p>
          ),
          btnText: "Focus on pre-approval eligibility first",
          onClick: () => {
            appState.getState().updateBookmark({ decision1Answer: { answer: 1, hideQuestion: false } });
            setTimeout(() => {
              appState.getState().updateBookmark({ decision1Answer: { answer: 1, hideQuestion: true } });
            }, 2000);
          },
        },
        {
          title: (
            <p>
              <strong>
                “I’d like to learn more about the programs you mentioned, like CommunityWorks. Maybe there are options I
                haven’t considered that could make things easier.”
              </strong>
            </p>
          ),
          btnText: "Explore available programs first",
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
  section6: {
    image: assetsModule2.omarScenario1Bg5,
    option1content: [
      <>
        <p className="headingTitleMedium">Result</p>
        <p>
          Megan schedules a call for you with a Mortgage <span className="visual-break" />
          Consultant.
        </p>
        <p>
          You feel a sense of clarity and purpose as you <span className="visual-break" />
          prepare, knowing that this call will be the first real <span className="visual-break" />
          step towards understanding what you can afford.
        </p>
      </>,
    ],
    option2content: [
      <>
        <p className="headingTitleMedium">Result</p>
        <p>
          Megan sets up an appointment for you with a <span className="visual-break" />
          Mortgage Consultant who specializes in first-time <span className="visual-break" />
          homebuyer programs, including CommunityWorks. <span className="visual-break" />
          You receive a confirmation email with details about <span className="visual-break" />
          the program and a list of questions you might want to <span className="visual-break" />
          prepare.
        </p>
        <p>
          As you look through the information, you feel <span className="visual-break" />
          optimistic, knowing that there are options designed to <span className="visual-break" />
          make the path to homeownership more accessible.
        </p>
      </>,
    ],
  },
  section7: {
    sectionTitle: "Finding a Fair Lender",
    content: (
      <h2>
        <span>Your Call with the Mortgage Consultant</span>
      </h2>
    ),
    image: assetsModule2.omarScenario1Bg6,
  },
  section8: {
    sectionTitle: "Finding a Fair Lender",
    content: [
      <>
        <p><strong>Lina:</strong></p>
        <p>
          <strong>
            “Hi, Omar! My colleague tells me that you're <span className="visual-break" />
            interested in buying a home. That’s exciting!”
          </strong>
        </p>
        <p>
          “My role is to help guide you the complex process of <span className="visual-break" />
          buying a home and provide guidance and resources <span className="visual-break" />
          to help. HSBC has a lot of options, and my job is to <span className="visual-break" />
          find the right one for you.”
        </p>
        <p>“Tell me a little about what you're looking for.”</p>
      </>,
      <>
        <p>
          <strong>The conversation is going well.</strong>
        </p>
        <p>
          Lina asks questions without judgement to better <span className="visual-break" />
          understand Omar and his family's needs.
        </p>
        <p>
          You told her you and Danielle have some money <span className="visual-break" />
          saved up but when Lina gives you an estimate of the <span className="visual-break" />
          amount needed up front, you realize you may not have <span className="visual-break" />
          enough. When you share your concern, she provides <span className="visual-break" />
          you with some resources to connect with that may be <span className="visual-break" />
          able to provide assistance programs and grants. She <span className="visual-break" />
          explains that many others are in a similar situation <span className="visual-break" />
          and these programs are often very helpful.
        </p>
        <p>
          <strong>
            You felt like Lina was taking the time to <span className="visual-break" />
            understand your situation and tried to find ways to <span className="visual-break" />
            make homeownership possible.
          </strong>
        </p>
      </>,
    ],
    image: assetsModule2.omarScenario1Bg7,
  },
  section9: {
    sectionTitle: "Finding a Fair Lender",
    content: [
      <>
        <p>
          Lina’s training at HSBC has equipped her with a deep <span className="visual-break" />
          understanding of the various affordable lending <span className="visual-break" />
          programs designed to support individuals like Omar. <span className="visual-break" />
          During their conversation, she picked up on several <span className="visual-break" />
          key indicators that signaled the{" "}
          <strong>
            CommunityWorks <span className="visual-break" />
            program
          </strong>{" "}
          would be the right fit.
        </p>
        <p>
          Let's review the information that helped Lina make <span className="visual-break" />
          this decision.
        </p>
      </>,
    ],
    image: assetsModule2.scenario1Section19Image,
  },
  section10: {
    sectionTitle: "Finding a Fair Lender",
    content: {
      title: <h2 className="headingTitleSmall">1. Omar’s financial concerns</h2>,
      description: (
        <>
          <p>
            He has expressed concerns about high upfront costs <span className="visual-break" />
            and having limited savings. Lina knew that the <span className="visual-break" />
            <strong>CommunityWorks program</strong> is specifically designed <span className="visual-break" />
            to reduce these barriers, offering low down payment <span className="visual-break" />
            options and a down payment assistance grant.
          </p>
          <p>
            This would ease the financial pressure and make <span className="visual-break" />
            homeownership more attainable.
          </p>
        </>
      ),
    },
  },
  section11: {
    sectionTitle: "Finding a Fair Lender",
    content: {
      title: (
        <h2 className="headingTitleSmall heading-number">
          <span className="heading-number-line-break">2. </span>
          <span className="content-number-line-break">
            Their status as a first-time <span className="visual-break" />
            homebuyers
          </span>
        </h2>
      ),
      description: (
        <>
          <p>
            The <strong>CommunityWorks program</strong> allows for <span className="visual-break" />
            additional grants to be used in conjunction with the <span className="visual-break" />
            HSBC CommunityWorks Opening Doors home loan <span className="visual-break" />
            grant and offers educational support, which are <span className="visual-break" />
            aimed at increasing accessibility.
          </p>
        </>
      ),
    },
  },
  section12: {
    sectionTitle: "Finding a Fair Lender",
    content: {
      title: (
        <h2 className="headingTitleSmall heading-number">
          <span className="heading-number-line-break">3. </span>
          <span className="content-number-line-break">
            Desire for stability and <span className="visual-break" />
            manageable payments
          </span>
        </h2>
      ),
      description: (
        <>
          <p>
            One of Omar’s main concerns was achieving long- <span className="visual-break" />
            term stability for him and his family. Lina knows <span className="visual-break" />
            that <strong>CommunityWorks</strong> product requires no <span className="visual-break" />
            Private Mortgage Insurance (PMI), which helps lower <span className="visual-break" />
            monthly payments.
          </p>
        </>
      ),
    },
  },
  section13: {
    sectionTitle: "Finding a Fair Lender",
    content: [
      <>
        <p>
          My uncle Louie once mentioned that he'd be willing <span className="visual-break" />
          to help us, but I feel uncomfortable about asking <span className="visual-break" />
          him. I'm not sure what to do... shall I move forward <span className="visual-break" />
          on our own or ask uncle Louie for help?
        </p>
      </>,
    ],
    image: assetsModule2.omarScenario1Bg9,
  },
  section14: {
    content: {
      question: "What will you do?",
      description: "Select one option:",
      options: [
        {
          description: <p>“I'd rather not ask for help. We can do it without Uncle Louie.”</p>,
          btnText: "Handle it myself",
          onClick: () => {
            appState.getState().updateBookmark({ decision2Answer: { answer: 1, hideQuestion: false } });
            setTimeout(() => {
              appState.getState().updateBookmark({ decision2Answer: { answer: 1, hideQuestion: true } });
            }, 2000);
          },
        },
        {
          description: <p>You ask Uncle Louie to give you a gift to help with closing costs.</p>,
          btnText: "Accept help from family",
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
  section15: {
    image: assetsModule2.omarScenario1Bg9,
    option1content: [
      <>
        <p className="headingTitleMedium">Result</p>
        <p>
          <strong>Lina says:</strong>
        </p>
        <p>
          “Let's submit this as a preapproval for the <span className="visual-break" />
          CommunityWorks product, which offers a closing <span className="visual-break" />
          cost credit and a down payment assistant grant, to <span className="visual-break" />
          see if you will qualify. This will ensure you qualify for <span className="visual-break" />
          the loan amount you would like, identify if you have <span className="visual-break" />
          enough funds to close or if you require more.
        </p>
        <p>
          This way, if you are approved, you can determine if <span className="visual-break" />
          you are comfortable with the monthly payment and <span className="visual-break" />
          can begin looking for homes. Most realtors require a <span className="visual-break" />
          preapproval when you are interested in putting in an <span className="visual-break" />
          offer on a home for sale anyways.”
        </p>
      </>,
    ],
    option2content: [
      <>
        <p className="headingTitleMedium">Result</p>
        <p>
          <strong>Lina says:</strong>
        </p>
        <p>
          “Even with your uncle’s gift, we can still submit this <span className="visual-break" />
          as a preapproval for the CommunityWorks product, <span className="visual-break" />
          which offers a closing cost credit and a down <span className="visual-break" />
          payment assistant grant, to give you the best chance <span className="visual-break" />
          to qualify. This will ensure you qualify for the loan <span className="visual-break" />
          amount you would like, identify if you have enough <span className="visual-break" />
          funds to close or if you require more.
        </p>
        <p>
          This way, if you are approved, you can determine if <span className="visual-break" />
          you are comfortable with the monthly payment and <span className="visual-break" />
          can begin looking for homes. Most realtors require a <span className="visual-break" />
          preapproval when you are interested in putting in an <span className="visual-break" />
          offer on a home for sale anyways.”
        </p>
      </>,
    ],
  },
  section16: {
    video: assetsModule2.omarScenario1Video,
    content1: [
      <>
        <div className="headingTitleMedium">What was Omar's experience like?</div>
        <div>
          <p>
            How does having a supportive Mortgage Consultant change Omar’s homebuying experience compared to his first encounter?
          </p>
        </div>
      </>,
      <>
        <div className="headingTitleMedium">What was Omar's experience like?</div>
        <div>
          <p>How did Lina’s actions contribute to an exceptional experience for Omar?</p>
        </div>
      </>
    ],
    content2: [
      <>
        <p className="headingTitleMedium">Reflect & Learn</p>
        <p>
          <strong>Understanding Our Impact</strong>
        </p>
        <p>
          <strong>Remember...</strong>
        </p>
        <p>Omar had a great experience because we:</p>
        <ul>
          <li>
            Identified his and his family's needs and introduced <span className="visual-break" />
            him to the right person.
          </li>
          <li>
            Listened and understood his individual <span className="visual-break" />
            circumstances.
          </li>
          <li>
            Provided him with guidance on the possibilities and <span className="visual-break" />
            options and supported him throughout.
          </li>
          <li>
            Remember back to when Omar met with Richard <span className="visual-break" />
            at RCR National Bank. After that meeting, he was <span className="visual-break" />
            discouraged and felt like homeownership wasn't <span className="visual-break" />
            possible. Many individuals like Omar face similar <span className="visual-break" />
            challenges in the homeownership process based <span className="visual-break" />
            on stereotypes and first impressions.
          </li>
        </ul>
      </>,
      <>
        <p>
          <strong>We play a critical role in educating individuals</strong>, <span className="visual-break" />
          providing advice, and breaking down the barriers to <span className="visual-break" />
          homeownership. In doing so, we make <span className="visual-break" />
          homeownership and achievable dream for all. Fair <span className="visual-break" />
          lending is essential because it's about doing what's <span className="visual-break" />
          right.
        </p>
        <p>
          We have a range of solutions to help our potential <span className="visual-break" />
          homebuyers. Our role is to find the best solution that <span className="visual-break" />
          fits our client's need and make homeownership a <span className="visual-break" />
          reality.
        </p>
      </>,
    ],
  },
  section17: {
    sectionTitle: "Finding a Fair Lender",
    content: (
      <h2>
        <span>Guiding the next steps</span>
      </h2>
    ),
    image: assetsModule2.omarScenario1Bg12,
  },
  section18: {
    sectionTitle: "Perspective of the Mortgage Consultant",
    content: [
      <>
        <p>
          Let’s now jump into the shoes of Lina, and look at her <span className="visual-break" />
          perspective...
        </p>
        <p>
          Omar and Danielle have just submitted their <span className="visual-break" />
          mortgage application. Now it’s your turn. Let’s review <span className="visual-break" />
          their profile and help them move forward.
        </p>
        <p>
          Lina contacts Omar to let him know the outcome of <span className="visual-break" />
          their application.
        </p>
        <p className="headingTitleMedium">How do you respond?</p>
      </>,
    ],
    image: assetsModule2.scenario1Section28And30Image,
  },
  section19: {
    content: {
      question: "How do you respond?",
      description: "Select one response:",
      options: [
        {
          description: (
            <>
              <p>
                “Hi Omar! Based on your profile and the selection of the
                CommunityWorks product, one item required is completing a homebuyer education course.
              </p>
              <p>
                I’ll send you a list of <strong>HUD-approved counselors</strong> who can walk you through things like
                budgeting, credit impact, and even how to avoid foreclosure risks. It’s really helpful, especially for
                first-time buyers.”
              </p>
            </>
          ),
          btnText: "Refer to homebuyer education",
          onClick: () => {
            appState.getState().updateBookmark({ decision3Answer: { answer: 1, hideQuestion: false } });
            setTimeout(() => {
              appState.getState().updateBookmark({ decision3Answer: { answer: 1, hideQuestion: true } });
            }, 2000);
          },
        },
        {
          description: (
            <>
              <p>
                “Omar, I’ve got some great news! You’ve been approved for a CommunityWorks mortgage product.
                Congratulations! I know how much this means to you and your family, and I want you to take a moment to let that sink in,
                you’ve made it through a huge part of the process.
              </p>
              <p>
                Now that you’re approved, here’s what happens next. I’ll send you a breakdown of your loan terms, and
                we’ll start discussing timelines and what kind of properties might fit your budget.
              </p>
              <p>
                I’ll walk you through the process until you close, and we’ll make sure you understand every step, no
                surprises. This is your journey, and I’m here to support you all the way.“
              </p>
            </>
          ),
          btnText: "Share the good news",
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
  section20: {
    option1content: [
      <>
        <p className="headingTitleMedium">Result</p>
        <p>
          You’ve upheld fair lending by listening to Omar and <span className="visual-break" />
          his family's needs and suggesting the CommunityWorks <span className="visual-break" />
          product for first-time and low-income buyers. Omar <span className="visual-break" />
          feels supported, and he gains confidence in the process <span className="visual-break" />
          and appreciates that the education course is part of <span className="visual-break" />
          preparing for homeownership.
        </p>
        <p>
          <strong>
            Omar and Danielle are eventually approved and <span className="visual-break" />
            they begin searching for their new home with <span className="visual-break" />confidence!
          </strong>
        </p>
      </>,
    ],
    option2content: [
      <>
        <p className="headingTitleMedium">Result</p>
        <p>
          <strong>
            Omar feels empowered and ready to move <span className="visual-break" />
            forward.
          </strong>
        </p>
        <p>
          Your clear explanation of the process helps him stay <span className="visual-break" />
          engaged and informed, and Danielle and him begin <span className="visual-break" />
          searching for their new home with confidence!
        </p>
      </>,
    ],
  },
  section21: {
    sectionTitle: "Reflect and learn",
    content: [
      <>
        <p className="headingTitleMedium">Reflect & Learn</p>
        <p>
          <strong>Actionable steps</strong>
        </p>
        <p>
          What steps can you take to ensure that you give fair <span className="visual-break" />
          opportunities to all?
        </p>
        <ol className="numbered-list-marker">
          <li>
            <strong>
              Actively check for stereotypes in your decision- <span className="visual-break" />
              making:
            </strong>{" "}
            Pause and ask yourself: Am I making <span className="visual-break" />
            assumptions about this individual based on first- <span className="visual-break" />
            impressions?
          </li>
          <li>
            <strong>Listen with empathy:</strong> Show interest by asking <span className="visual-break" />
            open-ended questions to discover the individual's <span className="visual-break" />
            story and summarize what you learned to make <span className="visual-break" />
            them feel heard.
          </li>
          <li>
            <strong>Take full ownership of the conversation:</strong> Make a <span className="visual-break" />
            smooth hand off when transitioning an individual <span className="visual-break" />
            to a colleague, connect them with care.
          </li>
        </ol>
      </>,
    ],
    image: assetsModule2.omarScenario1Bg15,
  },
};

const scenario3PathOmarModule2: Scenario3PathMarisolModule2I = {
  section1: {
    sectionTitle: "",
    content: (
      <h1>
        <span>Reputational Risk & Consequences</span>
      </h1>
    ),
    image: assetsModule2.omarScenario2Bg1,
  },
  section2: {
    sectionTitle: "Reputational Risk & Consequences",
    content: (
      <h2>
        <span>A few months passed</span>
      </h2>
    ),
    image: assetsModule2.omarScenario2Bg2,
  },
  section3: {
    sectionTitle: "Reputational Risk & Consequences",
    content: [
      <>
        <p>
          A few months later, you're sitting in traffic, inching <span className="visual-break" />
          your way home after a long day. At a red light, you <span className="visual-break" />
          glance at your phone and a breaking news alert flashes <span className="visual-break" />
          across the screen:
        </p>
      </>,
    ],
    image: assetsModule2.omarScenario2Bg3,
  },
  section4: {
    sectionTitle: "Reputational Risk & Consequences",
    content: [
      {
        phoneContent: (
          <>
            <h3 className="phone-label">BREAKING NEWS</h3>
            <p>
              <strong>
                Major Bank Under Investigation for Discriminatory Lending Practices” Violations of Fair Lending laws linked
                to biased treatment of minority homebuyers.
              </strong>
            </p>
          </>
        ),
        revealContent: (
          <>
            <p>
              You glance at the headline, but the light changes, so <span className="visual-break" />
              you ignore your phone and keep driving. The thought lingers...
            </p>
            <p>
              When you finally get home, you drop your work bag <span className="visual-break" />
              by the door. Danielle’s in the kitchen prepping <span className="visual-break" />
              dinner; Jalen and Mia are still out playing with the <span className="visual-break" />
              neighborhood kids. You sit down at the table, pull out <span className="visual-break" />
              your phone, and tap the article.
            </p>
            <p>
              <strong>“RCR National Bank</strong> is facing a federal investigation <span className="visual-break" />
              following allegations of discriminatory mortgage <span className="visual-break" />
              lending practices that have disproportionately <span className="visual-break" />
              impacted minority homebuyers. According to <span className="visual-break" />
              regulators, internal audits and leaked data revealed a <span className="visual-break" />
              troubling pattern...”
            </p>
          </>
        ),
        showDownArrow: false
      },
      {
        phoneContent: <></>,
        revealContent: <p>You tap the article.</p>,
        showDownArrow: false
      },
      {
        phoneContent: (
          <>
            <p style={{ fontSize: '28px' }}>
              <strong>
                According to the investigation, Minority customers were offered worse terms than equally qualified
                white applicants.
              </strong>
            </p>
          </>
        ),
        revealContent: (
          <p>
            The name of the bank: <strong>RCR National Bank?</strong> The <span className="visual-break" />
            same one you called a few months ago?
          </p>
        ),
        showDownArrow: true
      },
      {
        phoneContent: (
          <p className="headingTitleSmall">
            <strong>Borrowers were pushed toward high-cost loans or discouraged from applying altogether.</strong>
          </p>
        ),
        revealContent: (
          <p>As you read, you see quotes from real people, similar <span className="visual-break" />
            to your initial experience with the bank.</p>
        ),
        showDownArrow: true
      },
      {
        phoneContent: (
          <p className="headingTitleSmall">
            <strong>Examinations by regulators showed patterns of bias and exclusion.</strong>
          </p>
        ),
        revealContent: <p>The article goes on to explain the consequences for the bank...</p>,
        showDownArrow: true
      }
    ],
    revealContent: [
      <p>
        <strong>“RCR National Bank</strong> is facing a federal investigation <span className="visual-break" />
        following allegations of discriminatory mortgage <span className="visual-break" />
        lending practices that have disproportionately <span className="visual-break" />
        impacted minority homebuyers. According to <span className="visual-break" />
        regulators, internal audits and leaked data revealed a <span className="visual-break" />
        troubling pattern...”
      </p>,
      <p>You tap the article.</p>,
      <p>The name of the bank: <strong>RCR National Bank?</strong> The same one you called a few months ago?</p>,
      <p>As you read, you see quotes from real people, similar to your initial experience with the bank.</p>,
      <p>The article goes on to explain the consequences for the bank...</p>,
    ],
    mobileScreens: [
      <>
        <h3 className="phone-label">BREAKING NEWS</h3>
        <p>
          <strong>
            Major Bank Under Investigation for Discriminatory Lending Practices” Violations of Fair Lending laws linked
            to biased treatment of minority homebuyers.
          </strong>
        </p>
        <button
          onClick={() => {
            appState.getState().updateBookmark({ phoneAnimationStarted: true });
            appState.getState().setShowDownArrow(true);
          }}
          className="button-read-more"
        >
          Read more
        </button>
      </>,
      <>
        <span className="button-reveal-more">Reveal more</span>
      </>,
      <>
        <p className="headingTitleSmall">
          <strong>
            According to the investigation, Latino and Black customers were offered worse terms than equally qualified
            white applicants.
          </strong>
        </p>
      </>,
      <>
        <p className="headingTitleSmall">
          <strong>Borrowers were pushed toward high-cost loans or discouraged from applying altogether.</strong>
        </p>
      </>,
      <>
        <p className="headingTitleSmall">
          <strong>Examinations by regulators showed patterns of bias and exclusion.</strong>
        </p>
      </>,
    ],
  },
  section5: {
    sectionTitle: "Consequences for RCR National Bank",
    content: [
      <>
        <p>
          <strong>Consequences for RCR National Bank</strong>
        </p>
        <ul>
          <li>
            The bank is charged with fines and a $15 million <span className="visual-break" />
            financial penalty.
          </li>

          <li>Federal investigations and lawsuits.</li>

          <li>
            Consent orders making sure the bank takes <span className="visual-break" />
            corrective actions and requiring the bank to <span className="visual-break" />
            demonstrate measurable progress towards fair <span className="visual-break" />
            lending.
          </li>
        </ul>
      </>,
      <>
        <ul>
          <li>
            Reputational damage: This could affect how <span className="visual-break" />
            employees feel about working at the bank. It could <span className="visual-break" />
            also impact how clients feel about doing business <span className="visual-break" />
            with the bank.
          </li>
          <li>
            Customers may close their accounts and move <span className="visual-break" />
            them to other banks.
          </li>
          <li>
            Restricting their growth, the bank will not be able <span className="visual-break" />
            to grow their business or open new locations as <span className="visual-break" />
            planned.
          </li>
        </ul>
      </>,
    ],
    image: assetsModule2.omarScenario2Bg4,
  },
  section6: {
    sectionTitle: "Consequences for RCR National Bank",
    content: [
      <>
        <p>You think to yourself:</p>
        <p>
          <strong>
            “I can’t believe It’s the same bank that dismissed <span className="visual-break" />
            me months ago when I spoke to Richard. Now it’s <span className="visual-break" />
            on the national news…”
          </strong>
        </p>
      </>,
    ],
    image: assetsModule2.omarScenario2Bg5,
  },
  section7: {
    sectionTitle: "Reflect and learn",
    content: [
      <>
        <p className="headingTitleMedium">Reflect & Learn</p>
        <p>
          <strong>What do we know?</strong>
        </p>
        <p>
          Breaching Fair Lending regulations carries serious <span className="visual-break" />
          consequences for both customers and financial <span className="visual-break" />
          institutions. In this case, RCR National Bank is <span className="visual-break" />
          facing lawsuits, fines, and customer backlash. And <span className="visual-break" />
          the bank is under regulatory scrutiny for internal <span className="visual-break" />
          process failures in how people were treated, especially <span className="visual-break" />
          minority applicants.
        </p>
      </>,
      <>
        <p>
          When we make assumptions based on first <span className="visual-break" />
          impressions and let stereotypes affect our judgment, <span className="visual-break" />
          we risk:
        </p>

        <ul>
          <li>Turning away someone who we could help.</li>

          <li>
            Violating Fair Lending practices and not providing <span className="visual-break" />
            equal treatment for all individuals.
          </li>

          <li>
            Harming the bank’s reputation and losing client <span className="visual-break" />
            trust.
          </li>
        </ul>
      </>,
      <>
        <p>
          <strong>Remember...</strong>
        </p>

        <p>
          We play a critical role in educating individuals, <span className="visual-break" />
          providing advice and breaking down the barriers to <span className="visual-break" />
          home ownership. In doing so we make home <span className="visual-break" />
          ownership an achievable dream for all.
        </p>

        <p>
          This is a really important commitment and <span className="visual-break" />
          responsibility that we have as a financial institution.
        </p>
      </>,
    ],
    image: assetsModule2.omarScenario2Bg6,
  },
};

const scenario4PathOmarModule2: Scenario4PathMarisolModule2I = {
  section1: {
    sectionTitle: "",
    content: <h1>Future Impacts</h1>,
    video: assetsModule2.omarScenario3Video,
  },
  section2: {
    sectionTitle: "Future Impacts",
    content: (
      <h2>
        <span>Omar builds a better future</span>
      </h2>
    ),
    image: assetsModule2.omarScenario3Bg2,
  },
  section3: {
    sectionTitle: "Future Impacts",
    content: {
      title: (
        <p className="headingTitleSmall">
          After months of research, careful <span className="visual-break" />
          planning, and incredible support <span className="visual-break" />
          from the team at HSBC, Omar and <span className="visual-break" />
          Danielle successfully close the <span className="visual-break" />
          mortgage and become <span className="visual-break" />
          homeowners.
        </p>
      ),
      description: (
        <>
          <p>
            Through the CommunityWorks program, and <span className="visual-break" />
            because of their consistent rent history, steady <span className="visual-break" />
            income, and the support of Uncle Louie, they<span className="visual-break" />
            qualified for the loan amount they needed!
          </p>
        </>
      ),
    },
  },
  section4: {
    sectionTitle: "Future Impacts",
    content: {
      title: (
        <p className="headingTitleSmall">
          Their new home is everything <span className="visual-break" />
          they've dreamed of: a safe place <span className="visual-break" />
          for Jalen and Mia, a kitchen filled <span className="visual-break" />
          with light, and even a little patch <span className="visual-break" />
          of green out front.
        </p>
      ),
      description: (
        <>
          <p>
            Omar no longer worries about unexpected rent hikes. <span className="visual-break" />
            His children have their own bedrooms, a safe street <span className="visual-break" />
            to ride bikes on, and their school within walking <span className="visual-break" />
            distance. Owning a home brings a new kind of <span className="visual-break" />
            stability, and with that stability, a new sense of <span className="visual-break" />
            possibility.
          </p>
          <p>Because something else happens too…</p>
        </>
      ),
    },
  },
  section5: {
    sectionTitle: "Future Impacts",
    content: (
      <h2>
        <span>Time to settle down</span>
      </h2>
    ),
    image: assetsModule2.scenario4Section5Bg,
  },
  section6: {
    sectionTitle: "Future Impacts",
    content: {
      title: (
        <p>
          Now that he's settled, he starts thinking about <span className="visual-break" />
          how he can give back. With stable housing and a <span className="visual-break" />
          peace of mind at last, he starts to wonder:
        </p>
      ),
      description: (
        <p className="headingTitleSmall">
          “How can I connect with my <span className="visual-break" />
          neighbors and give back to the <span className="visual-break" />
          community that welcomed me <span className="visual-break" />
          here? I’m not just a homeowner; <span className="visual-break" />
          I’m part of a community! And I <span className="visual-break" />
          want to make it better for others <span className="visual-break" />
          as well.”
        </p>
      ),
    },
  },
  section7: {
    sectionTitle: "Future Impacts",
    content: (
      <h2>
        <span>When homeownership opens doors</span>
      </h2>
    ),
    image: assetsModule2.scenario4Section7Bg,
  },
  section8: {
    sectionTitle: "Future Impacts",
    content: [
      <>
        <p>
          <strong> What is the positive impact of homeownership?</strong>{" "}
        </p>
        <ol>
          <li>
            <strong>1. Building Community Connections</strong>
          </li>
        </ol>
        <p>
          Omar begins by setting up a{" "}
          <strong>
            Free Book-Lending <span className="visual-break" />
            Library
          </strong>{" "}
          outside his home. What started as a small <span className="visual-break" />
          box of donated books quickly becomes a <span className="visual-break" />
          neighborhood favorite, sparking conversations and <span className="visual-break" />
          even inspiring a monthly book club.
        </p>
      </>,
    ],
    image: assetsModule2.scenario4Section8Img,
  },
  section9: {
    sectionTitle: "Future Impacts",
    content: [
      <>
        <p>
          Soon after, he helps transform an empty lot near the <span className="visual-break" />
          playground into a <strong>Community Garden</strong>. Every <span className="visual-break" />
          weekend, families come together to grow vegetables, <span className="visual-break" />
          share gardening tips, and enjoy time outdoors.
        </p>
        <p>
          These simple ideas create moments of connection <span className="visual-break" />
          and shared interest that build trust and friendship in <span className="visual-break" />
          the community, giving Omar a sense of pride and <span className="visual-break" />
          purpose.
        </p>
      </>,
    ],
    image: assetsModule2.omarScenario3Bg6,
  },
  section10: {
    sectionTitle: "Future Impacts",
    content: [
      <>
        <ol>
          <li>
            <strong>2. A Place for Play and Learning</strong>
          </li>
        </ol>

        <p>
          With <strong>stable internet access</strong>, something Omar <span className="visual-break" />
          didn't have before, Jalen and Mia can finally <span className="visual-break" />
          complete their homework without frustrating <span className="visual-break" />
          interruptions.
        </p>

        <p>
          They begin inviting friends over for group projects, <span className="visual-break" />
          knowing that the connection won’t drop during <span className="visual-break" />
          important assignments. Omar and Danielle's kids no <span className="visual-break" />
          longer feel left behind by a lack of access.
        </p>
      </>,
    ],
    image: assetsModule2.scenario4Section10Img,
  },
  section11: {
    sectionTitle: "Future Impacts",
    content: [
      <>
        <ol>
          <li>
            <strong>3. Freedom from Financial Anxiety </strong>
          </li>
        </ol>

        <p>
          Homeownership also brings a financial peace of mind. <span className="visual-break" />
          Without the constant threat of rent increases, Omar <span className="visual-break" />
          and Danielle can budget more predictably.
        </p>

        <p>
          They no longer hesitate to buy Jalen and Mia new <span className="visual-break" />
          shoes when they outgrow their old ones, and they <span className="visual-break" />
          even enroll Jalen in the <strong>local soccer league</strong>, <span className="visual-break" />
          something he has always dreamed of. The stability of <span className="visual-break" />
          owning a home means they can now plan for their <span className="visual-break" />
          needs with confidence, knowing they don't have to <span className="visual-break" />
          choose between rent and giving their kids the <span className="visual-break" />
          experiences they deserve.
        </p>
      </>,
    ],
    image: assetsModule2.scenario4Section11Img,
  },
  section12: {
    sectionTitle: "Future Impacts",
    content: [
      <>
        <ol>
          <li>
            <strong>4. A Sense of Belonging </strong>
          </li>
        </ol>

        <p>
          Omar and his family also begin attending neighborhood <span className="visual-break" />
          events, like the <strong>annual community BBQ gathering</strong>. <span className="visual-break" />
          This year, Omar brought his famous BBQ ribs and was <span className="visual-break" />
          welcomed with open arms. It has helped him feel <span className="visual-break" />
          more included in the neighborhood and feel a sense <span className="visual-break" />
          of pride for the area where he lives.
        </p>

        <p>
          The BBQ was a moment of connection that has led to <span className="visual-break" />
          lasting friendships. He is now going to help to plan <span className="visual-break" />
          the next event, contributing ideas, and organizing local <span className="visual-break" />
          meetups to keep the spirit of the neighborhood strong.
        </p>
      </>,
    ],
    image: assetsModule2.omarScenario3Bg9,
  },
  section13: {
    sectionTitle: "Broader Impacts of Homeownership",
    content: [
      <>
        <p>
          <strong>Broader Impacts of Homeownership</strong>
        </p>

        <p>
          It has allowed Omar to gain stability in all aspects of <span className="visual-break" />
          his life; their housing payment remains consistent, their <span className="visual-break" />
          kids won't need to change schools, and they don't <span className="visual-break" />
          have to worry about finding a new apartment every <span className="visual-break" />
          few years. Owning their home allows them to put down <span className="visual-break" />
          roots, connect with their community and focus on <span className="visual-break" />
          what's next.
        </p>

        <p>
          Without the mental load of constantly worrying about <span className="visual-break" />
          their housing security, Omar is able to turn his <span className="visual-break" />
          attention to other goals and dreams. He's even <span className="visual-break" />
          planning a surprise summer road trip for Danielle and <span className="visual-break" />
          the kids!
        </p>
      </>,
    ],
    image: assetsModule2.scenario4Section13Img,
  },
  section14: {
    sectionTitle: "Conclusion",
    contentWithDownload: (onDownload, hasDownloaded) => [
      <>
        <p>
          <strong>Omar’s story is just one example.</strong>
        </p>
        <p>
          We can transform lives by making homeownership <span className="visual-break" />
          possible. When any individual expresses a need for <span className="visual-break" />
          home financing, get them to one of our Mortgage <span className="visual-break" />
          Consultants.
        </p>
        <p>We can turn their dreams into a reality.</p>
      </>,
      <>
        <h2 className="headingTitleSmall">
          Thank you for completing this <span className="visual-break" />
          module
        </h2>
        <p>
          Before you go, make sure to download your
          <span className="visual-break" />
          <strong>Reflective PDF: Part 2 — Building Behaviours.</strong>
        </p>
        <p>
          Once downloaded, you’ll be able to mark this module as complete.
          <span className="visual-break" />
          <button
            className="download"
            onClick={() => {
              const link = document.createElement("a");
              link.href = assetsModule2.module2Scenario4Pdf;
              link.download = "Fair_Lending_HSBC_US_Part2.pdf";
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
            <button onClick={() => appState.getState().updateBookmark({ finishScreen: true })}>Complete module</button>
          </p>
        )}
      </>,
    ],
    image: assetsModule2.omarScenario3Bg11,
  },
};

export const module2OmarPathContent: Module2MarisolPathContentI = {
  scenario1: scenario1PathOmarModule2,
  scenario2: scenario2PathOmarModule2,
  scenario3: scenario3PathOmarModule2,
  scenario4: scenario4PathOmarModule2,
};

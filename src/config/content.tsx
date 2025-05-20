import { appState } from '~/state/app-state'

const content = {
  en: {
    homePage: `Home Page`,
    markAsComplete: `Mark as complete`,
    exit: `Exit`,
  },
};

export default content;

export const pageContent = {
  intro: {
    section1: {
      id: "Imagine",
      title: <>Imagine this...</>,
      description: (
        <><p>You walk into a jewelry store on a rainy afternoon, your hoodie still damp, your sneakers a little muddy from the  pick up football game with your friends earlier. You’ve been saving for months, carefully putting aside every extra dollar because today, you’re picking out something that matters, an engagement ring.</p>
          <p>You're a little nervous, a little excited. Because this isn’t just a ring, this moment reflects the future you’re building.</p>
        </>
      )
    },
    section2: {
      content: [
        <>
          <p>You step up to the counter, glancing at the display of elegant bands, admiring the wide selection of styles. You notice the sales assistants standing together. They glance in your direction, but no one approaches to help you. Moments later, a well-dressed couple enters the store and one of the sales assistants' springs into action almost immediately to help them.</p>
          <p>You wait for what feels like an eternity, standing awkwardly in the middle of the store before they accept that you aren’t going to leave and reluctantly approach you to offer assistance.</p>
          <p>But before you can say a word, the sales assistant glances at you briefly and gestures toward a separate case off to the side.</p>
          <p><strong>"These are our more affordable options," she says, with a polite smile.</strong></p>
        </>,
        <>
          <p><strong>You pause.</strong></p>
          <p>You haven’t said anything about your budget. You haven’t even asked a question yet. You wonder, would she have made the same suggestion if you were wearing a suit today? If you looked like the other couple who entered the store?</p>
          <p>You leave feeling let down and disappointed. Not by the ring selection, but by the assumption that was made about you, just from looking. <strong>Being pre-judged and redirected, before anyone even heard your story.</strong></p>
        </>
      ]
    },
    section3: {
      content: [
        <>
          <p><strong>Trying to shake it off...</strong></p>
          <p>You walk into a small, family-run Mexican restaurant nearby. You browse the menu and confidently order some tortilla chips with a homemade Habanero chili pepper salsa. You love spicy food.</p>
          <p>But instead of simply taking your order, the owner hesitates and asks...</p>
        </>,
        <>
          <p><strong>"Are you sure?<br />Don’t you think it will be too spicy for you?"</strong></p>
          <p>Maybe he means well, assuming he’s helping by steering you toward something milder. Maybe he's had past experiences where customers regretted their spice level choices.</p>
          <p>But what if he wouldn’t have asked the same question to someone else? What if he assumed your taste preferences based only on what you look like?</p>
        </>
      ]
    },
    section4: {
      leftContent: <p><span style={{ color: 'var(--color-red)' }}>Stereotypes</span> are most often sub-conscious. They are shaped by experiences, cultural influences and environment. They can influence opinions and decisions - creating unintentional impacts.</p>,
      rightContent: <p>What about you? Have you ever made an assumption about someone based on their appearance, background, or name, without even realizing it? Maybe you’ve expected someone to behave a certain way, assumed what they could or couldn’t do, or been surprised by their skills or preferences.</p>
    },
    section5: {
      id: "Reflect",
      content: [
        <>
          <p className="headingTitle">Reflect for a moment</p>
          <p>What stereotypes might be shaping your own decisions? <strong>Our assumptions can unknowingly affect our choices.</strong></p>
          <p>You play a critical role in helping individuals and families achieve one of life’s most important milestones, homeownership. Fair lending is a very important commitment and responsibility we have to make sure that these stereotypes do not become barriers to <strong>homeownership and ensure equal access for everyone.</strong></p>
          <p>The first step in addressing bias is recognizing it. So, what can we do to challenge these assumptions and create fairer experiences for everyone?</p>
        </>,
        <>
          <p>You'll now begin an interactive, choose-your-character experience, where you will step into the shoes of one of three potential homebuyers, in their journey towards home ownership.</p>
          <p>Pay special attention to how different lending practices affect real people and communities.</p>
          <p className="headingTitle">Are you ready?</p>
        </>
      ]
    },
    section6: {
      id: "Choose your character experience",
      leftImgTitle: "Omar Davis",
      leftDescription: "A day in the life of Omar Davis",
      rightImgTitle: "Marisol Garcia",
      rightDescription: "A day in the life of Marisol García",
    },
    section7: {
      id: "Introduction",
      content: <p>Marisol García is 34 and lives in Brooklyn with her two kids. She works at a bakery, earning minimum wage—around $43,000 a year. The small two-bedroom apartment they rent is becoming harder to afford with rising rent costs. She has some savings but not enough for a home.</p>
    },
  },
  scenario1: {
    section1: {
      content: <p>Internet Access and Education</p>
    },
    section2: {
      content: <><div>9am</div><div>Marisol's morning</div></>
    },
    section3: {
      title: <p>Let's place yourself in Marisol's shoes...</p>,
      description: (
        <>
          <p>You drop your two children, Mateo and Sofia off at their public school, where digital tools are essential for their learning.</p>
          <p>Their school provides loaner laptops to ensure every child has access to online assignments.</p>
        </>
      )
    },
    section4: {
      content: <><div>2pm</div><div>Early afternoon</div></>
    },
    section5: {
      content: [
        <>
          <p>After school, Mateo and Sofia sit down to complete their homework on the school’s online learning platform.</p>
          <p>As they try to log in, the connection keeps dropping, and videos take forever to load, <strong>turning a simple assignment into a frustrating ordeal</strong>.</p>
        </>
      ]
    },
    section6: {
      content: <><div>5pm</div><div>Dinner time</div></>
    },
    section7: {
      content: [
        <>
          <p>You watch as your children struggle with their homework, unable to access the same fast, reliable internet that wealthier families take for granted.</p>
          <p>You know they deserve better, but in your neighborhood, high-speed internet remains out of reach.</p>
          <p><strong>“I want Mateo and Sofia to be able to do their homework for tomorrow, what can I do to help them?”</strong></p>
          <p className="headingTitle">What will you do?</p>
        </>
      ]
    },
    section8: {
      options: [{
        title: '“If there’s a way to improve the connection, I have to try. Maybe there’s a faster option they haven’t told me about?”',
        description: "You decide to call your internet provider to see if there’s anything they can do to improve your service.",
        btnText: "Call the provider",
        onClick: () => {
          appState.getState().updateBookmark({ decision1Answer: 1 })
        }
      }, {
        title: '“Maybe Jessica can help. She’s mentioned how fast her internet is...”',
        description: "You decide to call your friend, Jessica, who lives in a wealthier neighborhood. She tells you her kids have no issues with remote learning because her area has high-speed fiber internet and invites you to bring Mateo and Sofia over to her house.",
        btnText: "Go to Jessica",
        onClick: () => {
          appState.getState().updateBookmark({ decision1Answer: 2 })
        }
      }]
    },
    section9: {
      option1content: [
        <>
          <p className="headingTitle">Result</p>
          <p>Your internet provider tells you:</p>
          <p><strong>“Sorry, that’s the fastest speed available in your area…”</strong></p>
          <p>“They said "my area" I wonder about other areas...
            You decide to check the provider’s website and enter an address in a wealthier, predominantly white neighborhood just a few miles away.</p>
          <p>To your surprise, the website shows that high-speed fiber internet is available here, yet your internet has slower speeds.</p>
          <p>A reliable internet is essential for Marisol and her children to help with their schoolwork, but not everyone has equal access to this.</p>
        </>
      ],
      option2content: [
        <>
          <p className="headingTitle">Result</p>
          <p>Later that evening, back at home, you decide to check the provider’s website and enter an address in a wealthier, predominantly white neighborhood just a few miles away.</p>
          <p>To your surprise, the website shows that high-speed fiber internet is available here, yet your internet has slower speeds.</p>
          <p>A reliable internet is essential for you and your children to help with their schoolwork, but not everyone has equal access to this.</p>
        </>
      ]
    },
    section10: {
      content1: [
        <>
          <p className="bot-1 headingTitle">Reflect & Learn</p>
          <ul>
            <li>Marisol’s neighborhood has been digitally redlined, meaning internet providers have historically neglected to upgrade infrastructure in lower-income and minority communities.</li>
            <li>Instead of installing high-speed fiber internet, they keep old, slower networks in place, leading to limited-service options compared to wealthier areas.</li>
          </ul>
        </>,
        <ul>
          <li>Why? Because companies base their decisions on expected profits. If a provider thinks an area won’t bring in enough revenue, due to perceived lower demand or affordability, they may skip it altogether.</li>
          <li>Because Marisol’s community faces reduced access to high-speed internet, it could limit opportunities for education, employment, and healthcare services. This creates a digital divide.</li>
        </ul>
      ],
      content2: [
        <p>How did it feel to realize that families in wealthier areas have access to better internet while your community does not?</p>,
        <p>How would this situation impact your daily life, if Mateo and Sofia consistently experienced unreliable internet? How might this affect their education and career options in the future?</p>,
        <p>And beyond their education, what other areas of your life could be impacted by digital redlining? What about your job search, healthcare, banking?</p>
      ]
    }
  },
  scenario2: {
    section1: {
      content: <div>Marisol Receives a Mortgage Marketing Flyer in her Mail</div>
    },
    section2: {
      content: <><div>6pm</div><div>Late afternoon</div></>
    },
    section3: {
      description: "You sit at the kitchen table, sorting through the day’s mail while Mateo and Sofia are in the living room doing their homework. While flipping through a few bills and grocery store coupons, your eyes suddenly land on a shiny, glossy flyer from the bank:",
      title: '“Do You Qualify for a Mortgage? Stop Renting & Own Your Dream Home!"'
    },
    section4: {
      content: [
        <>
          <p>You stare at the flyer, your heart tightening. Owning a home has always been your dream, a place where the kids would have stability, space, and no more landlords sending messages about rent increases.</p>
          <p>No more worrying about being forced to move...</p>
          <p>Just last month, your friend Alex, someone whose situation never looked all that different from yours, got the keys to his own place.</p>
          <p className="headingTitle">What will you do?</p>
        </>
      ]
    },
    section5: {
      options: [{
        title: '“I hate wasting money on rent, it just disappears, and a mortgage would mean I’m investing in my family’s future. But... with my job situation right now, would they even consider me?”',
        description: "I should call Uncle Javier. He once mentioned he could potentially help with my downpayment?",
        btnText: "Ask family for help",
        onClick: () => {
          appState.getState().updateBookmark({ decision2Answer: 1 })
        }
      }, {
        title: '“Owning a home could be my way out of this rent trap, but I need to be smart about it. I think I should seek advice from the bank...”',
        description: "",
        btnText: "Get financial advice",
        onClick: () => {
          appState.getState().updateBookmark({ decision2Answer: 2 })
        }
      }]
    },
    section6: {
      option1content: [
        <>
          <div className="headingTitle">Result</div>
          <p>You decide to take a leap! You reach out to a family member for help to see what they can provide.</p>
          <p><strong>This flyer has reignited your dream. One way or another, you're determined to get there.</strong></p>
        </>
      ],
      option2content: [
        <>
          <div className="headingTitle">Result</div>
          <p>You seriously consider homeownership, seeking advice from a professional.</p>
          <p><strong>This flyer has reignited your dream. One way or another, you're determined to get there.</strong></p>
        </>
      ]
    },
    section7: {
      content: [
        <>
          <div className="headingTitle">What does 'Home' mean to you?</div>
          <p>Research from Fannie Mae says more <strong>people today (44%) say their home means more to them than it did a few years ago.</strong></p>
          <p>As housing has become increasingly unaffordable in recent years due to higher home prices, mortgage rates, and rents, this sentiment could reflect the fact that many consumers might not have been able to afford their current home in today's market.</p>
        </>
      ]
    },
    section8: {
      content: [
        <>
          <p>One of the top reasons homes have taken on greater meaning lately? A sense of security.</p>
          <p><strong>Around 59% of people say this emotional safety net has become more important than ever, especially for homeowners (61%) compared to renters (42%). A sentiment Marisol strives for as well.</strong></p>
        </>
      ]
    },
    section9: {
      content: [
        <>
          <p>But it’s not just about safety. People also want homes that fit their lives. Think outdoor spaces to breathe, rooms for hobbies, and yards for growing your own veggies. Many renters say they'd even pay more to get these things, plus proximity to work, shops, or family.</p>
          <p>More <strong>people today (46%) are also acknowledging the long-term financial value of homeownership, a big jump from just 39% in 2015</strong>, also making renters become more interested in homeownership.</p>
          <p><strong>Home means something different to everyone, what does it mean to you?</strong></p>
        </>
      ]
    },
    section10: {
      content: <><div>7pm</div><div>Evening time</div></>
    },
    section11: {
      description: "Later that evening, after putting Mateo and Sofia to bed, you’re back at the kitchen table with your laptop open. You just have so many questions, you’ve never bought a home before!   Would my savings be enough for a down payment? Would the monthly mortgage payments be lower than rent?",
      title: 'You do some research online...'
    },
    section12: {
      content: (
        <>
          <p>Interest rates depend on factors such as credit scores, income, and debt.</p>
          <p>You check your credit score online, it’s good, but not perfect. You wonder:</p>
          <p><strong>"Even if my credit is good, what kind of interest rate will I be eligible for?"</strong></p>
        </>
      ),
      onClickReveal: () => {
        appState.getState().updateBookmark({ laptopRevealed: true })
        appState.getState().setShowDownArrow(true)
      }
    },
    section13: {
      content1: [
        <>
          <p className="headingTitle">Reflect & Learn</p>
          <p className="bot-1">Did you know?</p>
          <ul>
            <li>Home Mortgage Disclosure Act (HMDA) collects application and approval data from all mortgage providers in the US. Analysis of this data revealed that Latino, Asian/Pacific Islander, and Native American applicants faced higher denial rates than white applicants with comparable financial characteristics. In addition, Black applicants were nearly twice as like likely to be denied conventional mortgages as similarly qualified white applicants.</li>
          </ul>
        </>,
        <ul>
          <li>Poor or limited credit history is a major barrier for many Latino homebuyers. According to the Urban Institute, Latino borrowers are more likely to have lower credit scores or be <strong>“credit invisible”</strong>, meaning they don’t have enough traditional credit history to generate a credit score. This is often because they are more likely to have had limited interactions with the formal financial system, past exclusionary lending practices, or a reliance on cash-based financial habits. Even if someone is financially responsible, a lack of credit history can make it harder to qualify for a mortgage under current lending standards.</li>
          <li>A study by the Joint Center for Housing Studies of Harvard University found that Black homeowners with incomes between $75,000 and $100,000 had <strong>higher median interest rates</strong> (4.215%) compared to white homeowners earning $30,000 or less (4.16%).</li>
        </ul>,
        <>
          <ul>
            <li>Research from the JPMorgan Chase Institute shows that Black and Hispanic borrowers often incur higher closing costs compared to white borrowers, even after accounting for factors like loan size and credit profiles.</li>
          </ul>
          <p>These studies show that some people face unfair treatment when trying to buy a home, just because of their background. This means they might get denied more often or have to pay higher costs, even if they qualify. It is important for lenders to treat everyone fairly so that everyone has the same chance to own a home and build a better future.</p>
        </>
      ],
      content2: [
        <>
          <p>How would you feel if you knew you were being charged higher fees or denied a home loan while others with the same financial situation received better deals?</p>
        </>
      ]
    }
  },
  scenario3: {
    section1: {
      content: <div>Call with a Mortgage Consultant</div>
    },
    section2: {
      content: <><div>2pm</div><div>Research</div></>
    },
    section3: {
      title: "After receiving the flyer, you spend days researching homeownership, mortgages, and first-time buyer programs.",
      description: "You know that rent prices keep increasing, and owning a home could be a path to stability for you and your two kids."
    },
    section4: {
      content: [
        <>Knowing you have some savings and that your uncle Javier has offered a gift for the downpayment and/or closing costs. You feel cautiously hopeful and decide to schedule a virtual meeting with a mortgage consultant at Aspire National Bank to discuss your options.</>
      ]
    },
    section5: {
      content: (
        <>
          <div>3pm</div>
          <div>The call</div>
        </>
      )
    },
    section6: {
      content: [
        <>
          <p><strong>The mortgage consultant, Richard, joins the video call, barely making eye contact. He looks distracted, typing on his keyboard while you introduce yourself.</strong></p>
          <p>“Hi, thanks for meeting with me. I wanted to explore mortgage options. I’ve been renting for years and really want to buy a home now. I work full-time and have some savings, plus my uncle is willing to help with some of the costs.”</p>
          <p><strong>Richard observes Marisol and her surroundings before replying...</strong></p>
          <p>“We have a lot of mortgage options, but they do require significant down payments and an established credit history. Based on your situation, it may be difficult for you to qualify, but I'll send you some information to take a look at and we'll go from there.”</p>
          <p className="headingTitle">What will you do?</p>
        </>
      ]
    },
    section7: {
      options: [{
        title: 'You accept default - You ask quetly:',
        description: '“…So, it’s not possible for me?” and stare at the mortgage flyer still sitting on the table. You just want to crumple it up and throw it away...”',
        btnText: "Accept defeat",
        onClick: () => {
          appState.getState().updateBookmark({ decision3Answer: 1 })
        }
      }, {
        title: "You decide to push back - Richard hasn't even looked into my details properly.",
        description: '“Wait. I haven’t even shared my finances yet. I have some savings, I pay my rent on time, and I’m researching first-time homebuyer programs. Is there nothing you can do?”...',
        btnText: "Push back",
        onClick: () => {
          appState.getState().updateBookmark({ decision3Answer: 2 })
        }
      }]
    },
    section8: {
      option1content: [
        <div>Let's now <strong>jump into the shoes of Richard,</strong> and look at his perspective...</div>,
        <>
          <p>Marisol looks defeated...</p>
          <p><strong>“…So, it’s not possible for me?”</strong></p>
          <p>She stares at the mortgage flyer still sitting on the table.</p>
          <p><strong>How do you respond?</strong></p>
        </>

      ],
      option2content: [
        <div>Let’s now <strong>jump into the shoes of Richard,</strong> and look at his perspective...</div>,
        <>
          <p>Marisol is determined:</p>
          <p><strong>“Wait. You haven’t even looked at my finances yet...”</strong></p>
          <p><strong>How do you respond?</strong></p>
        </>
      ]
    },
    section9: {
      content: [
        <>
          <p>Select each option to see how discouraging responses can impact someone’s journey toward owning a home. Each response shows what can go wrong when we let stereotypes or a lack of information get in the way of fair treatment and opportunities.</p>
          <p>Only after exploring all the options will you be able to move forward.</p>
          <p><strong>Let's see the impact when it's not done right.</strong></p>
        </>
      ]
    },
    section10: {
      cards: [
        {
          frontContent: (
            <><p><strong>Response:</strong></p><p>“The mortgage process is very complex with many eligibility requirements, we may start the process but based on what you've shared, it might be hard for you to meet those requirements.</p></>
          ),
          backContent: (
            <><p><strong>Result:</strong></p><p>Richard is making assumptions about her eligibility without exploring options, effectively preemptively dismissing her application.</p></>
          )
        },
        {
          frontContent: (
            <><p><strong>Response:</strong></p><p>“I mean, technically, you may try applying, but realistically, I don’t think you’d be approved. I understand that this is frustrating, but at this time, I don’t see a way forward for you. Maybe focus on building more savings first.”</p></>
          ),
          backContent: (
            <><p><strong>Result:</strong></p><p>Richard is discouraging Marisol from applying without giving her practical solutions or informing her about our affordable lending solutions and/or partnerships.</p></>
          )
        },
        {
          frontContent: (
            <><p><strong>Response:</strong></p><p>“Well… there might be an option. Based on your income history and current employment status, you wouldn’t qualify for our standard mortgage rates, but it can be possible if you accept a higher interest rate and extra fees.”</p></>
          ),
          backContent: (
            <><p><strong>Result:</strong></p><p>Richard is pushing Marisol to take a more expensive loan option.</p></>
          )
        }
      ],
      onCompleteFn: () => {
        appState.getState().updateBookmark({ flipCards1Completed: true })
        appState.getState().setShowDownArrow(true)
      }
    },
    section11: {
      content1: [
        <p>What impact does this type of discouragement have on homebuyers, based on stereotypes and assumptions?</p>,
        <p>Take a moment to consider how Marisol might be feeling. What resources or people could help her see that she still has options?</p>
      ],
      content2: [
        <>
          <p className="headingTitle">Reflect & Learn</p>
          <ul>
            <li>Marisol is not being given a fair opportunity to purchase a home.</li>

            <li>Richard failed Marisol, not because she wasn’t qualified, but because of his own stereotypes and assumptions.</li>

            <li>Richard dismissed Marisol too quickly based on a first impression, leading to assumptions about her qualifications. This left Marisol feeling dismissed and inferior.</li>
          </ul>
          <p>Instead of helping to support her dream of homeownership...</p>
          <p><strong>He turned her away.</strong></p>
        </>,
        <>
          <p>What should Richard have done in this scenario?</p>
          <ul>
            <li><strong>Fair Treatment for All:</strong> Our responsibility is to help support people achieve homeownership, not discourage or turn them away. Every potential homebuyer should be given the same opportunities regardless of background.</li>
            <li><strong>Finding the Right Solution:</strong> Richard should have considered the range of available solutions and instead of dismissing Marisol, taken the time to explore solutions that fit her needs.</li>
            <li><strong>Access to Homeownership Assistance Programs:</strong> The journey to homeownership is a complex one, and there are many programs to help, for example first-time homebuyer programs and mortgage counseling services. Richard should have connected Marisol with those resources.</li>
          </ul>
        </>,
        <ul>
          <li><strong>Affordable lending products and Down Payment Assistance Grants:</strong> Low down-payment mortgage options are often designed for, but not limited to, first-time homebuyers. This may be combined with eligible grants to help pay for costs associated with obtaining a mortgage.</li>
          <li>Housing and Urban Development training through non-profit partnerships.</li>
          <li>Home buyer education counseling courses.</li>
          <li>Nonprofit and federal agencies offering affordable housing programs.</li>
        </ul>
      ]
    },
    section12: {
      cards: [
        {
          frontContent: (
            <p><strong>The Fair Housing Act<br />(FHA)</strong></p>
          ),
          backContent: (
            <p>The Fair Housing Act prohibits discrimination based on disability, race, color, national origin, religion, sex and familial status when a person is buying, renting, or securing finances for a home.</p>
          )
        },
        {
          frontContent: (
            <p><strong>The Home Mortgage Disclosure Act<br />(HMDA)</strong></p>
          ),
          backContent: (
            <p>The HMDA requires mortgage lenders to collect and report demographic data to ensure transparency.</p>
          )
        },
        {
          frontContent: (
            <p><strong>The Equal Credit Opportunity Act<br />(ECOA)</strong></p>
          ),
          backContent: (
            <p>The ECOA protects consumers from credit discrimination.</p>
          )
        },
        {
          frontContent: (
            <p><strong>Unfair, Deceptive, or Abusive Acts and Practices<br />(UDAAP)</strong></p>
          ),
          backContent: (
            <p>UDAAP protects consumers from practices that are considered <strong>unfair, deceptive, or abusive</strong>, such as misleading information, hidden fees, or exploiting consumer vulnerabilities, and prevents predatory lending.</p>
          )
        }
      ],
      onCompleteFn: () => {
        appState.getState().updateBookmark({ flipCards2Completed: true })
        appState.getState().setShowDownArrow(true)
      }
    },
    section13: {
      title: "",
      description: "In part 2 of this module, we’ll go beyond the policies and products to explore the important role you play in putting these protections into action. And look at how by guiding everyone toward a solution that fits their needs, <strong>we can make a real difference.</strong></p>"
    }
  },
  scenario4: {
    section1: {
      content: <p className="headingTitle">The Role We All Play, When We Don’t Get It Right</p>
    },
    section2: {
      title: "It isn't just about what happens during the mortgage application. It begins with the very first interaction with us, whether that is in person, on video, by phone or by chat.",
      description: "Every one of us has a responsibility to listen, support, and connect individuals to the right solutions. When we make assumptions, that doesn't happen and people like Marisol aren't given fair access to opportunities."
    },
    section3: {
      content: [
        <>Let’s step into the shoes of a colleague at Aspire National Bank and explore a scenario that shows the impact of what happens when we don't get it right.</>
      ]
    },
    section4: {
      content: <><div>10am</div><div>Contact Center</div></>
    },
    section5: {
      content: [
        <>
          <p>A client calls a Contact Center. It’s their first contact with the bank and you can hear excitement in their voice.</p>
          <p><strong>They tell you...</strong></p>
        </>,
        <>
          <p>"Hi, I was wondering how I would go about applying for an account with you. I’ve just got my first good job out of college, and I want to start thinking about my future and hopefully get on the housing ladder one day.</p>
          <p>I don’t come from much but I’m on the road to somewhere, you know, and I want to be with a bank that will help me grow what I’ve got, when I get it. My boss recommended I give you a call. Could you tell me what options I should be looking at?"</p>
          <p className="headingTitle">How do you respond?</p>
        </>
      ]
    },
    section6: {
      options: [{
        title: 'You accept default - You ask quetly:',
        description: '“…So, it’s not possible for me?” and stare at the mortgage flyer still sitting on the table. You just want to crumple it up and throw it away...”',
        btnText: "Come back when you qualify",
        onClick: () => {
          appState.getState().updateBookmark({ decision4Answer: 1 })
        }
      }, {
        title: "You decide to push back - Richard hasn't even looked into my details properly.",
        description: '“Wait. I haven’t even shared my finances yet. I have some savings, I pay my rent on time, and I’m researching first-time homebuyer programs. Is there nothing you can do?”...',
        btnText: "Told to keep trying",
        onClick: () => {
          appState.getState().updateBookmark({ decision4Answer: 2 })
        }
      }]
    },
    section7: {
      option1content: [
        <>
          <p className="headingTitle">Result</p>
          <p>You’ve assumed the individual wouldn’t be eligible for products with us without asking for any of their financial details. While the caller has been open about their lack of savings, we know nothing of their salary or the sector they work in.</p>
          <p>On top of that you’ve been quite disparaging, potentially losing a client in the future as well as now.</p>
        </>
      ],
      option2content: [
        <>
          <p className="headingTitle">Result</p>
          <p>While you’ve been very supportive of their dreams here, we’ve still not confirmed any of their financial details, relying on assumptions based on what they’ve said. This reinforces the idea that only certain individuals are allowed financial advice or access to wealth-building products.</p>
          <p>It excludes individuals who may not come from a background of intergenerational wealth or financial literacy.</p>
        </>
      ]
    },
    section8: {
      content: <><div>11am</div><div>A new perspective</div></>
    },
    section9: {
      description: "Unbeknownst to you, the prospective client was three months into a lucrative, permanent job in the tech industry, having graduated from MIT in Computer Science. Despite a lack of savings or familial wealth, their base salary of $144k would qualify them for a premier account.",
      title: "Remember, our assumptions can deceive us, always confirm a prospective client’s financial details before jumping to any conclusions."
    },
    section10: {
      description: "This isn’t just the case when prospective clients call into a contact center. In person, the same rules apply. Let’s look at how similar conversations may play out in a branch. Step into the shoes of Lisa, a Relationship Manager.",
      title: ""
    },
    section11: {
      content: <><div>2pm</div><div>A client walks into an Aspire National Bank branch</div></>
    },
    section12: {
      content: [
        <>
          <p><strong>They say to the RM:</strong></p>
          <p>“Hi, I've done some research on ways to plan for my family's future. I’ve been renting for years and I’m maybe thinking about buying. I’ve been saving what I can for a while now but I’m not sure if it’s enough for me to qualify for a mortgage yet. Could you tell me where to start?”</p>
          <p><strong>How does Lisa respond? Let's see the impact when it's not done right.</strong></p>
        </>
      ]
    },
    section13: {
      options: [{
        title: 'Financially Established Clients:',
        description: '“We have minimum deposit balance requirements to establish a relationship with us. I can review those with you if you\'d like.”',
      }, {
        title: "Website Has the Info:",
        description: '“Let me share with you a link to our website where you can find a lot of information.”',
      }, {
        title: "Renting Might Be Smarter Right Now:",
        description: '“It does take a lot of resources these days to buy a home. In this current market, if you don’t have family support or a big deposit saved up, it might be better to keep renting for now."',
      }],
      onSubmit: (answer: number) => {
        appState.getState().updateBookmark({ decision5Answer: answer })
      }
    },
    section14: {
      option1content: [
        <>
          <p className="headingTitle">Result</p>
          <p>Lisa discouraged a motivated first-time homebuyer without exploring their full background. Your role may not directly offer mortgage advice, but you may be their first point of contact.</p>
          <p><strong>When any individual expresses a need for home financing it's important to get them one of our mortgage consultants.</strong></p>
        </>
      ],
      option2content: [
        <>
          <p className="headingTitle">Result</p>
          <p>Lisa turned away someone who asked for help and offered no clear next steps.</p>
          <p><strong>It’s not about having all the answers, it’s about being willing to connect the individual to someone who does.</strong></p>
        </>
      ],
      option3content: [
        <>
          <p className="headingTitle">Result</p>
          <p>Lisa assumed the individual was not a serious or viable applicant based on assumptions she made about the individual's financial situation. This discourages individuals who are just starting out or don't appear to fit a certain profile.</p>
          <p><strong>This approach directly undermines Fair Lending principles, which are designed to give all individuals the opportunity to own a home, regardless of background.</strong></p>
        </>
      ]
    },
    section15: {
      content: ""
    },
    section16: {
      content: [
        <>
          <p className="headingTitle">Coming in part two</p>
          <p>Marisol is currently discouraged and doesn't think a home is possible. The tides turn for Marisol when she comes to HSBC and how her life is changed for the better.</p>
        </>,
        <>
          <p>Please select the Exit button to complete:</p>
          <p><strong>Part 1 – Building Behaviours</strong></p>
          <p>After exiting, be sure to access the Reflective PDF for Part 1 in the product resources.</p>
        </>
      ]
    }
  }
}

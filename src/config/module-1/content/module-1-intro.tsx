import { Module1IntroI } from "~/types";
import { assets } from "../assets";
import { appState } from '../../../state/app-state'

export const module1Intro: Module1IntroI = {
  modal: {
    title: "Welcome to Part 1 – Building Behaviors",
    description: (
      <>
        <p>
          <strong>Scroll down to move forward</strong>.
          <span className="visual-break" />
          To revisit earlier sections, simply scroll back up.
        </p>
        <p>
          As you progress, you’ll encounter <strong>decision points</strong> that guide your experience.{" "}
          <span className="visual-break" />
          After each choice, reflection moments are built into the story, giving you time to{" "}
          <span className="visual-break" />
          pause, think, and process.
        </p>
        <p>
          Use the menu on the right to <strong>track your progress</strong> or <strong>exit anytime</strong>. Your
          progress <span className="visual-break" />
          is saved, so you can pick up right where you left off.
        </p>
      </>
    ),
    btnText: "Enter module",
    onClose: () => {
      appState.getState().updateBookmark({ isIntroModalOpen: false })
    }
  },
  section1: {
    sectionTitle: "Imagine",
    content: {
      title: <h2 className="headingTitleMedium">Imagine this...</h2>,
      description: (
        <>
          <p>
            You walk into a jewelry store on a rainy afternoon, <span className="visual-break" /> your hoodie still
            damp, your sneakers a little muddy <span className="visual-break" /> from the  pick up football game with
            your friends <span className="visual-break" /> earlier. You’ve been saving for months, carefully{" "}
            <span className="visual-break" /> putting aside every extra dollar because today, you’re{" "}
            <span className="visual-break" /> picking out something that matters, an engagement{" "}
            <span className="visual-break" /> ring.
          </p>
          <p>
            You're a little nervous, a little excited. Because this <span className="visual-break" /> isn’t just a ring,
            this moment reflects the future you’re <span className="visual-break" /> building.
          </p>
        </>
      ),
    },
  },
  section2: {
    sectionTitle: "Imagine",
    content: [
      <>
        <h2 className="headingTitleMedium">Imagine this...</h2>
        <p>
          You walk into a jewelry store on a rainy afternoon, <span className="visual-break" /> your hoodie still
          damp, your sneakers a little muddy <span className="visual-break" /> from the  pick up football game with
          your friends <span className="visual-break" /> earlier. You’ve been saving for months, carefully{" "}
          <span className="visual-break" /> putting aside every extra dollar because today, you’re{" "}
          <span className="visual-break" /> picking out something that matters, an engagement{" "}
          <span className="visual-break" /> ring.
        </p>
        <p>
          You're a little nervous, a little excited. Because this <span className="visual-break" /> isn’t just a ring,
          this moment reflects the future you’re <span className="visual-break" /> building.
        </p>
      </>,
      <>
        <p>
          You step up to the counter, glancing at the display of <span className="visual-break" /> elegant bands,
          admiring the wide selection of styles.
          <span className="visual-break" /> You notice the sales assistants standing together.{" "}
          <span className="visual-break" /> They glance in your direction, but no one approaches{" "}
          <span className="visual-break" />
          to help you. Moments later, a well-dressed couple <span className="visual-break" /> enters the store and one
          of the sales assistants' <span className="visual-break" /> springs into action almost immediately to help
          them.
        </p>
        <p>
          You wait for what feels like an eternity, standing <span className="visual-break" /> awkwardly in the middle
          of the store before they <span className="visual-break" /> accept that you aren’t going to leave and
          reluctantly <span className="visual-break" /> approach you to offer assistance.
        </p>
        <p>
          But before you can say a word, the sales assistant <span className="visual-break" /> glances at you briefly
          and gestures toward a separate <span className="visual-break" /> case off to the side.
        </p>
        <p>
          <strong>
            "These are our more affordable options," she <span className="visual-break" /> says, with a polite smile.
          </strong>
        </p>
      </>,
      <>
        <p>
          <strong>You pause.</strong>
        </p>
        <p>
          You haven’t said anything about your budget. You <span className="visual-break" /> haven’t even asked a
          question yet. You wonder, <span className="visual-break" /> would she have made the same suggestion if you{" "}
          <span className="visual-break" /> were wearing a suit today? If you looked like the other{" "}
          <span className="visual-break" /> couple who entered the store?
        </p>
        <p>
          You leave feeling let down and disappointed. Not by <span className="visual-break" /> the ring selection, but
          by the assumption that was <span className="visual-break" /> made about you, just from looking.{" "}
          <strong>
            Being pre-judged <span className="visual-break" /> and redirected, before anyone even heard your{" "}
            <span className="visual-break" /> story.
          </strong>
        </p>
      </>,
    ],
    image: assets.introBg1,
  },
  section3: {
    sectionTitle: "Imagine",
    content: [
      <>
        <p>
          <strong>Trying to shake it off...</strong>
        </p>
        <p>
          You walk into a small, family-run Mexican restaurant <span className="visual-break" /> nearby. You browse the
          menu and confidently order <span className="visual-break" /> some tortilla chips with a homemade Habanero
          chili <span className="visual-break" /> pepper salsa. You love spicy food.
        </p>
        <p>
          But instead of simply taking your order, the owner <span className="visual-break" /> hesitates and asks...
        </p>
      </>,
      <>
        <p>
          <strong>
            "Are you sure?
            <br />
            Don’t you think it will be too spicy for you?"
          </strong>
        </p>
        <p>
          Maybe he means well, assuming he’s helping by <span className="visual-break" /> steering you toward something
          milder. Maybe he's <span className="visual-break" /> had past experiences where customers regretted their{" "}
          <span className="visual-break" /> spice level choices.
        </p>
        <p>
          But would he have asked the same question <span className="visual-break" />
          to someone else? Or did he assume your taste <span className="visual-break" />
          preferences based solely on your appearance?
        </p>
      </>,
    ],
    image: assets.introBg2,
  },
  section4: {
    sectionTitle: "Imagine",
    content: {
      title: (
        <p className="headingTitleSmall">
          <span style={{ color: "var(--color-red)" }}>Stereotypes</span> are most often{" "}
          <span className="visual-break" /> sub-conscious. They are <span className="visual-break" /> shaped by
          experiences, cultural <span className="visual-break" /> influences and environment.{" "}
          <span className="visual-break" /> They can influence opinions <span className="visual-break" /> and decisions
          - creating <span className="visual-break" /> unintentional impacts.
        </p>
      ),
      description: (
        <p>
          What about you? Have you ever made an assumption <span className="visual-break" /> about someone based on
          their appearance,
          <span className="visual-break" /> background, or name, without even realizing it?{" "}
          <span className="visual-break" /> Maybe you’ve expected someone to behave a certain{" "}
          <span className="visual-break" /> way, assumed what they could or couldn’t do, or{" "}
          <span className="visual-break" /> been surprised by their skills or preferences.
        </p>
      ),
    },
  },
  section5: {
    sectionTitle: "Reflect",
    content: [
      <>
        <h2 className="headingTitleMedium">Reflect for a moment</h2>
        <p>
          What stereotypes might be shaping your own <span className="visual-break" /> decisions?
          <strong>
            {" "}
            Our assumptions can unknowingly <span className="visual-break" /> affect our choices.
          </strong>
        </p>
        <p>
          You play a critical role in helping individuals and <span className="visual-break" /> families achieve one of
          life’s most important <span className="visual-break" /> milestones, homeownership. Fair lending is a very{" "}
          <span className="visual-break" /> important commitment and responsibility we have to{" "}
          <span className="visual-break" /> make sure that these stereotypes do not become{" "}
          <span className="visual-break" /> barriers to{" "}
          <strong>
            homeownership and ensure equal <span className="visual-break" /> access for everyone.
          </strong>
        </p>
        <p>
          The first step in addressing stereotypes is recognizing <span className="visual-break" />
          them. So, what can we do to challenge these <span className="visual-break" />
          assumptions and create fair experiences for everyone?
        </p>
      </>,
      <>
        <p>
          You will now begin an interactive, choose-your- <span className="visual-break" />
          character experience, where you will step into the <span className="visual-break" />
          shoes of a potential homebuyer in their <span className="visual-break" />
          journey towards home ownership.
        </p>
        <p>
          Pay special attention to how people and communities <span className="visual-break" />
          can be impacted by stereotypes.
        </p>
        <p className="headingTitleMedium">Are you ready?</p>
      </>,
    ],
    image: assets.introBg3,
  },
  section6: {
    id: "Choose your character experience",
    leftImgTitle: "Omar Davis",
    leftDescription: "A day in the life of Omar Davis",
    rightImgTitle: "Marisol Garcia",
    rightDescription: "A day in the life of Marisol García",
  },
};

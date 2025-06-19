import { assetsModule2 } from "~/config/module-2/assets";
import { Module2IntroI } from "~/types";
import { appState } from "~/state/app-state";

export const module2Intro: Module2IntroI = {
  modal: {
    title: "Welcome to Fair Lending Part 2 – Inspire Impact",
    description: (
      <>
        <p>
          <strong>Scroll down to move forward</strong>.
          <br />
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
  preIntroModal: {
    title: '',
    description: (
      <>
        <p>Welcome back! In this module, we have the opportunity to continue with the experience of either Marisol or Omar. Both are still eager to achieve homeownership but are unsure of whether it is realistic due to their disappointing experiences with RNR National Bank.</p>
        <p>Before you rejoin your character, let’s hear from another potential client, Claudia, who is also considering homeownership. Similar to Marisol and Omar, Claudia feels that home ownership has the ability to transform her family’s life, but doesn’t know exactly where to start.</p>
        <p><strong>The good news is, we can help.</strong></p>
        <p>Let’s pay special attention to Claudia’s unique challenges and consider our role in supporting her dreams.</p>
      </>
    ),
    btnText: "Close",
    onClose: () => {
      appState.getState().updateBookmark({ module2PreIntroModalClicked: true })
    }
  },
  section1: {
    sectionTitle: "The Human Impact Film: Claudia’s Story",
    video: assetsModule2.introVideo
  },
  section2: {
    sectionTitle: "Welcome to the module",
    content: {
      title: <h2 className="headingTitleSmall">That’s where HSBC comes in.</h2>,
      description: (
        <>
          <p>
            Homeownership should be an opportunity <strong>open to <span className="visual-break" />
              everyone</strong>. It is an <strong>entry point to building wealth</strong>. <span className="visual-break" />
            Owning a home doesn’t just change where someone <span className="visual-break" />
            lives, <strong>it can change their future</strong>, their finances, and <span className="visual-break" />
            can impact the strength of their entire community. <span className="visual-break" />
            Each and every one of us <strong>play a vital role</strong> in making <span className="visual-break" />
            that happen.
          </p>
        </>
      ),
    },
  },
  section3: {
    sectionTitle: "Welcome to the module",
    content: [
      <>
        <p>
          In this module, we’ll explore the long-term impacts <span className="visual-break" />
          of fair lending and how helping people in all <span className="visual-break" />
          communities explore the possibility of home <span className="visual-break" />
          ownership leads to real, lasting change.
        </p>
      </>
    ],
    image: assetsModule2.introSection3Img
  },
  section4: {
    instructions: (
      <>
        <p>
          <strong>You may remember our two characters from Part 1: Marisol and Omar.</strong>
        </p>

        <p>
          Like so many others, they’re both up against the challenges of affordability, rising rents, systemic barriers,
          and the high cost of living. Ultimately, both have dreams of owning a home.
        </p>

        <p>
          On the following screen, you’ll step back into the shoes of one of them. Choose your character —{" "}
          <strong>Marisol</strong> or
          <strong>Omar</strong> — and let’s continue their journey.
        </p>
      </>
    ),
    leftImgTitle: "Omar Davis",
    leftDescription: "Omar's journey continues",
    rightImgTitle: "Marisol Garcia",
    rightDescription: "Marisol's journey continues",
    startingModal: {
      content: (
        <>
          <p><strong>You may remember our two characters from Part 1: <span className="visual-break" />Marisol and Omar</strong></p>
          <p>Marisol is a 34 year old single mother of two who works at a bakery, living in Brooklyn, New York. Omar is a 41 year old father of two in Los Angeles, working multiple jobs alongside his wife.</p>
          <p>Like so many others, they’re both up against the challenges of affordability, rising rents, systemic barriers, and the high cost of living. Ultimately, both have dreams of owning a home. Where we last left off, both characters had disappointing experiences with Richard, the mortgage consultant at RCR National Bank, which left them feeling discouraged and uncertain about their path to homeownership.</p>
          <p>On the following screen, you’ll step back into the shoes of one of them. Choose your character — <strong>Marisol</strong> or <strong>Omar</strong> — and let’s continue their journey.</p>
        </>
      ),
      onCloseCb: () => {
        appState.getState().updateBookmark({ rememberCharacterModalClicked: true })
      }
    }

  },

};

import { useRef, useEffect, useState } from "react";

import * as Style from "./navigation.styles";
import { IconRefresh } from "../icons/icon-refresh";
import { IconClose } from "../icons/icon-close";
import { appState } from "~/state/app-state";
import { Modal } from "../../components/modal/modal";

type NavigationProps = {
  title: string;
};

export const Navigation = ({ title }: NavigationProps) => {
  const [restartModalIsOpen, setRestartModalIsOpen] = useState(false);
  const [exitModalIsOpen, setExitModalIsOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isNavigationOpen = appState((state) => state.isNavigationOpen);
  const { scenarios, lastScene } = appState((state) => state.bookmark);
  console.log('scenarios: ', scenarios)

  const currentScenario = lastScene?.slice(0, 2);

  const toggleMenu = () => {
    appState.getState().setIsNavigationOpen(!isNavigationOpen);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isNavigationOpen) {
        appState.getState().setIsNavigationOpen(false);
        buttonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isNavigationOpen]);

  useEffect(() => {
    if (!isNavigationOpen) return;

    const focusableElements = menuRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (!focusableElements || focusableElements.length === 0) return;

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }

      if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    };

    menuRef.current?.addEventListener("keydown", handleTabKey);
    return () => menuRef.current?.removeEventListener("keydown", handleTabKey);
  }, [isNavigationOpen]);

  useEffect(() => {
    if (isNavigationOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isNavigationOpen]);

  const navigateToSection = (sectionId: string) => {
    appState.getState().setIsNavigationOpen(false);

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView();
      }
    }, 100);
  };

  const handleRestart = () => {
    appState.getState().resetBookmark();
    window.location.reload();
  };

  const restartModalContent = {
    title: "Restart Module?",
    description: (
      <>
        <p>This will reset your progress and start the module from the beginning. Are you sure you want to continue?</p>
        <Style.ModalButtonOptions>
          <button onClick={handleRestart}>Restart module</button>
          <button onClick={() => setRestartModalIsOpen(false)}>Cancel</button>
        </Style.ModalButtonOptions>
      </>
    ),
  };

  const exitModalContent = {
    title: "Exit Module?",
    description: (
      <>
        <p>Your progress will be saved. You can return and continue anytime. Are you sure you want to exit now?</p>
        <Style.ModalButtonOptions>
          <button
            onClick={() => {
              window.close();
              window.parent.close();
            }}
          >
            Exit module
          </button>
          <button onClick={() => setExitModalIsOpen(false)}>Cancel</button>
        </Style.ModalButtonOptions>
      </>
    ),
  };

  return (
    <>
      <Style.NavigationBurgerButton
        ref={buttonRef}
        onClick={() => appState.getState().setIsNavigationOpen(!isNavigationOpen)}
        aria-expanded={isNavigationOpen}
        aria-controls="burger-menu"
        aria-label={isNavigationOpen ? "Close menu" : "Open menu"}
      >
        <span></span>
        <span></span>
        <span></span>
      </Style.NavigationBurgerButton>

      <Style.NavigationOverlay $isOpen={isNavigationOpen} onClick={toggleMenu} aria-hidden="true" />

      <Style.NavigationBody
        ref={menuRef}
        id="burger-menu"
        role="dialog"
        aria-label="Site navigation"
        $isOpen={isNavigationOpen}
        aria-hidden={!isNavigationOpen}
        inert={!isNavigationOpen}
      >
        <Style.NavigationContent>
          <Style.NavigationHeading>
            <div>
              <h1>Fair Lending</h1>
              <h2>{title}</h2>
            </div>
            <Style.NavigationCloseButton onClick={toggleMenu} aria-label="Close menu">
              ✕
            </Style.NavigationCloseButton>
          </Style.NavigationHeading>
          <Style.ScenarioLists>
            {scenarios.map((module, index) => {
              const match = currentScenario && module.startSectionId.startsWith(currentScenario);

              if (module.isCompleted) {
                return (
                  <li key={`${index}-${module.startSectionId}`}>
                    <Style.ScenarioLink
                      to={`/#${module.startSectionId}`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToSection(module.startSectionId);
                      }}
                      $isCompleted={module.isCompleted}
                      $isActive={!!match}
                    >
                      <span>
                        {index + 1}. {module.title}
                      </span>
                      <div aria-label={module.isCompleted ? "Completed" : "Not completed"} />
                    </Style.ScenarioLink>
                  </li>
                );
              } else {
                return (
                  <li key={`${index}-${module.startSectionId}`}>
                    <Style.ScenarioFakeLink $isCompleted={module.isCompleted} $isActive={!!match}>
                      <span>
                        {index + 1}. {module.title}
                      </span>
                      <div aria-label={module.isCompleted ? "Completed" : "Not completed"} />
                    </Style.ScenarioFakeLink>
                  </li>
                );
              }
            })}
          </Style.ScenarioLists>
          <Style.NavigationFooter>
            <hr />
            <button onClick={() => setRestartModalIsOpen(true)}>
              <IconRefresh />
              <span>Restart Module</span>
            </button>
            <button onClick={() => setExitModalIsOpen(true)}>
              <IconClose />
              <span>Exit Module</span>
            </button>
          </Style.NavigationFooter>
        </Style.NavigationContent>
      </Style.NavigationBody>
      <Modal content={restartModalContent} isModalOpen={restartModalIsOpen} />
      <Modal content={exitModalContent} isModalOpen={exitModalIsOpen} />
    </>
  );
};

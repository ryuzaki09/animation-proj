import React, { useCallback, useEffect, useRef } from "react";
import { ModalWrapper } from "./modal.styles";
import { createPortal } from "react-dom";
import { appState } from "~/state/app-state";

type ModalProps = {
  content: any;
  isModalOpen: boolean
};

export const Modal = ({ content, isModalOpen }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!dialogRef.current) return;

    if (isModalOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isModalOpen]);

  const handleCloseDialogEvent = useCallback(
    (e: MouseEvent) => {
      if (dialogRef.current && e.target === dialogRef.current) {
        content.onClose()
        dialogRef.current.close();
      }
    },
    [isModalOpen],
  );

  useEffect(() => {
    if (!dialogRef.current) return;
    dialogRef.current?.addEventListener("click", (e) => handleCloseDialogEvent(e));

    return () => dialogRef.current?.removeEventListener("click", (e) => handleCloseDialogEvent(e));
  }, [handleCloseDialogEvent]);

  React.useEffect(() => {
    if (!isModalOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      const key = event.key.toLowerCase();
      if (key === "escape") {
        content.onClose()
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  React.useEffect(() => {
    const body = document.getElementsByTagName("body")?.[0];
    const scrollBarWidth = window.innerWidth - document.body.offsetWidth;
    if (body === null) return;

    if (isModalOpen) {
      body.style.overflow = "hidden";
      body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      body.style.overflow = "auto";
      body.style.paddingRight = `0px`;
    }

    return () => {
      body.style.overflow = "auto";
      body.style.paddingRight = `0px`;
    };
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  return createPortal(
    <ModalWrapper
      onClick={(e) => e.stopPropagation()}
      role="dialog"
      id="dialog"
      aria-modal={isModalOpen ? "true" : "false"}
      ref={dialogRef}
      onClose={content.onClose}
    >
      <div>
        <h2>{content.title}</h2>
        <div>{content.description}</div>
        {content.btnText && (
          <button onClick={content.onClose}>
            {content.btnText}
          </button>
        )}
      </div>
    </ModalWrapper>,
    document.body,
  );
};

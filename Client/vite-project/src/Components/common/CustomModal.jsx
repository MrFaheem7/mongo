import { useState } from "react";
import Modal from "react-bootstrap/Modal";

export const CustomModal = ({ children, onHide, show, title, size }) => {
  return (
    <>
      <Modal size={size} centered show={show} onHide={onHide} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};

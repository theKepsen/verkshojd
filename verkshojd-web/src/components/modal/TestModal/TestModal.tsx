import { useLayout } from "../../../providers/LayoutProvider/LayoutProvider";
import { ModalBase } from "../ModalBase";

export const TestModal = () => {
  const { closeTestModal } = useLayout();

  return (
    <ModalBase onClose={closeTestModal}>
      <h1>Test Modal</h1>
      <p>This is a test modal.</p>
    </ModalBase>
  );
};

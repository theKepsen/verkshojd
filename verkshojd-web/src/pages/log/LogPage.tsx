import { useLayout } from "../../providers/LayoutProvider/LayoutProvider";

export const LogPage = () => {
  const { openTestModal } = useLayout();
  return (
    <>
      <h1>LOG</h1>
      <p>This is the log page.</p>
      <button onClick={openTestModal}>Open Test Modal</button>
    </>
  );
};

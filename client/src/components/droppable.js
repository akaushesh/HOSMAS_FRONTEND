import { useDroppable } from "@dnd-kit/core";

export function Droppable({ id, disabled = false, children }) {
  const { setNodeRef } = useDroppable({
    id: id,
    disabled: disabled,
  });

  return <div ref={setNodeRef}>{children}</div>;
}

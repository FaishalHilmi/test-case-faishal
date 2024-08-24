export default function Form({ onSubmit, children }) {
  return (
    <form method="post" onSubmit={onSubmit}>
      {children}
    </form>
  );
}

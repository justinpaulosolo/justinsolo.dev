export default function Button({ text }: { text: string }) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const input = event.target as HTMLButtonElement;
    input.innerText = "Clicked!";
  };
  return (
    <button
      className="rounded-lg bg-blue-500 py-3 px-6 text-white"
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

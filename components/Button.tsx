export default function Button({ text }: { text: string }) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const input = event.target as HTMLButtonElement;
    input.innerText = "Clicked!";
  };
  return (
    <button
      className="py-3 px-6 bg-blue-500 text-white rounded-lg"
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

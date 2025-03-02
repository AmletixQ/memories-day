const Header = () => {
  const first_anchors = [
    { href: "#memories", text: "Memories" },
    { href: "#timeline", text: "Timeline" },
  ];
  const second_anchors = [
    { href: "#quote", text: "Quote" },
    { href: "#love-letter", text: "Love Letter" },
  ];

  return (
    <header className="border-gray-450 sticky top-0 flex items-center justify-center gap-4 border border-b-1 p-4">
      {first_anchors.map((anchor) => (
        <a key={anchor.href + anchor.text} href={anchor.href}>
          {anchor.text}
        </a>
      ))}
      <h1 className="text-2xl font-bold">Our Memories</h1>
      {second_anchors.map((anchor) => (
        <a key={anchor.href + anchor.text} href={anchor.href}>
          {anchor.text}
        </a>
      ))}
    </header>
  );
};

export default Header;

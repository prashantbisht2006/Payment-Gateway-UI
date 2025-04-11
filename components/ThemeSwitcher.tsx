"use client";

type Props = {
  theme: string;
  setTheme: (theme: string) => void;
};

export default function ThemeSwitcher({ theme, setTheme }: Props) {
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={`px-4 py-2 rounded-md border font-medium transition duration-300 shadow-md 
        ${theme === "dark" 
          ? "bg-gray-700 text-white border-gray-500 hover:bg-gray-600" 
          : "bg-gray-200 text-black border-gray-300 hover:bg-gray-300"
        }`}
    >
      {theme === "light" ? "🌞" : "🌙"}
    </button>
  );
}

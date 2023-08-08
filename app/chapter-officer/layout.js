import ChapterOfficersTab from "../components/ChapterOfficersTab";

export default function RootLayout({ children }) {
  return (
    <main className="">
      <ChapterOfficersTab />
      {children}
    </main>
  );
}

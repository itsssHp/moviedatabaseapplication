import './globals.css';  // Correct path for globals.css in the app folder


export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl">Movie Database</h1>
      </header>
      <main className="flex-1 p-4">{children}</main>
    </div>
  )
}

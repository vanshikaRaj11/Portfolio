import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="relative  top-0 z-[-2] h-screen w-screen bg-neutral-900">
        <div className="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
        <Navbar />
      </div>
    </div>
  );
}

export default App;

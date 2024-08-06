import Navbar from "./components/Navbar";

function App() {
  return (
    <div class="relative  top-0 z-[-2] h-screen w-screen bg-neutral-900">
      <div class="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]">
        <Navbar />
      </div>
    </div>
  );
}

export default App;

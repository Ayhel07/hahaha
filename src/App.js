import './App.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className='sticky top-0'>Header</header>
      <main className="flex-grow w-full max-w-5xl mx-auto bg-gray-600 p-4">
        <div className='h-32'>Hello World</div>
      </main>
      <footer className="sticky bottom-0">Footer</footer>
    </div>
  );
}

export default App;

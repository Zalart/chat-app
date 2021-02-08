import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <Contact name="Barry Schmidt" online avatar="https://randomuser.me/api/portraits/men/88.jpg" />
      <Contact name="Joseph Myers" avatar="https://randomuser.me/api/portraits/men/89.jpg" />
      <Contact name="Wendy Williamson" online avatar="https://randomuser.me/api/portraits/women/7.jpg" />
    </div>
  );
}

export default App;

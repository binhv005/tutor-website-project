import Footer from "./components/Footer";
import Header from "./components/Header";
import TutorCard from "./components/TutorCard";

function App() {
  return (
    <>
      <Header />
      <TutorCard
        name="Nguyen Van Muoi"
        subject="Toan"
        grade="Lop 9"
        address="Ho Chi Minh"
      />
      <TutorCard
        name="Nguyen Thi A"
        subject="Van"
        grade="Lop 12"
        address="Tien Giang"
      />
      <TutorCard
        name="Nguyen Van D"
        subject="Sinh"
        grade="Lop 4"
        address="Thai Nguyen"
      />
      <Footer />
    </>
  );
}

export default App;
